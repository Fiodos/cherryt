// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import {RewardToken} from "./Token.sol";

contract Funds {
    address public admin; // Admin of all funds

    uint256 public FundCounter; // Auto id counter
    RewardToken public rewardTokenContract; // Token contract

    struct Fund {
        uint256 fundID; // Unique identifier of fund
        string name; // Name of fund
        bool fundActive; // Whether funding is ongoing
        address fundOwner; // Owner of fund
        address receiver; // Receiver address of funds
        uint256 totalFunded; // Total funding received
        string description; // Fund description
        string cover;
    }

    Fund[] public funds; // List of all funds
    //mapping(uint256 => Fund) private fundByID; // Mapping of ID to specific fund
    mapping(address => uint256) private fundOwners; // Mapping of owner address to specific fund
    mapping(address => mapping(uint256 => uint256)) private funders; // Person x funds fundID y, z amount

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not owner");
        _;
    }

    modifier onlyFundOwner(uint256 _fundID) {
        require(msg.sender == funds[_fundID].fundOwner, "Not the fund owner");
        _;
    }

    modifier onlyAdminOrFundOwner(uint256 _fundID) {
        require(msg.sender == funds[_fundID].fundOwner || msg.sender == admin, "Not the right access");
        _;
    }

    modifier fundActive(uint256 _fundID) {
        require(funds[_fundID].fundActive, "Fund not open");
        _;
    }

    constructor() {
        rewardTokenContract = new RewardToken("CHARITY", "TY");
        admin = msg.sender;
        FundCounter = 0;
    }

    /// @dev Initializes new fund that is open for funding starting with 0 total funds and where msg.sender is the fund owner
    /// @param _name Name of fund
    /// @param _receiver Receiving address of funding for this fund
    function createfund(string memory _name, address _receiver, string memory description, string memory _image) external {
        funds.push(Fund(FundCounter, _name, true, msg.sender, _receiver, 0, description, _image));
        fundOwners[msg.sender] = FundCounter;
        FundCounter += 1;
    }

    /// @param _fundID Unique ID of fund
    function donateToFund(uint256 _fundID) public payable {
        Fund storage fund = funds[_fundID];
        fund.totalFunded += msg.value;
        funders[msg.sender][_fundID] += msg.value;
        rewardTokenContract.mint(msg.sender, msg.value);
    }

    function endFund(uint256 _fundID) external onlyAdminOrFundOwner(_fundID) fundActive(_fundID) {
        funds[_fundID].fundActive = false;
        withdrawFunding(_fundID);
    }

    function withdrawFunding(uint256 _fundID) internal {
        Fund storage fund = funds[_fundID];
        (bool sent, bytes memory data) = fund.receiver.call{value: fund.totalFunded}("");
        require(sent, "Failed to send Ether");
    }

    function getFunderAmount(address funder, uint256 _fundID) external view onlyFundOwner(_fundID) returns (uint256) {
        require(funders[funder][_fundID] > 0, "Funder not found");
        return funders[funder][_fundID];
    }

    function getOwnFundingAmount(uint256 _fundID) external view returns (uint256) {
        require(funders[msg.sender][_fundID] > 0, "No funds found");
        return funders[msg.sender][_fundID];
    }

    function getTokenBalanceOf() external view returns (uint256) {
        return rewardTokenContract.balanceOf(msg.sender);
    }
}