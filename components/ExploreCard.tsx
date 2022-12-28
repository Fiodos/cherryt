import { NextPage } from "next";
import { ethers } from "ethers";
import { useRouter } from "next/router";
import { address } from "../utils/constants";
import ABI from "../utils/abi.json";

interface Props {
  name: string;
  description: string;
  img: string;
  goal: string;
}

const ExploreCard: NextPage<Props> = ({ name, description, img, goal }) => {
  const router = useRouter();

  async function donate() {
    const contract = new ethers.Contract(address, ABI, await getSigner());
    try {
      const tx = await contract.donateToFund(1, {
        value: ethers.utils.parseEther("0.01"),
      });
      await tx.wait();
      router.reload();
      console.log("Campaign created: " + tx.hash);
    } catch (error) {
      console.log("Error while creating campaign: ", error);
    }
  }

  async function getSigner() {
    const provider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );
    const signer = provider.getSigner();
    return signer;
  }

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={img} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          💰Campaign Goal: <span className="font-mono ml-4">{goal}$</span>
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <button
          onClick={() => donate()}
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 ml-4 text-center mr-2 mb-2"
        >
          Donate!
        </button>
      </div>
    </div>
  );
};

export default ExploreCard;
