import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { address } from "../utils/constants";
import ABI from "../constants/abi.json";
import PageLayout from "../components/PageLayout";
import CampaignCard from "../components/CampaignCard";

export default function Dashboard() {
  const [fund, setFund] = useState<any>([]);

  async function getSigner() {
    const provider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );
    const signer = provider.getSigner();
    return signer;
  }

  async function fetchData() {
    const contract = new ethers.Contract(address, ABI, await getSigner());
    try {
      const fund = await contract.funds(4);
      setFund(fund);
    } catch (err) {
      console.log("Error fetching data: " + err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PageLayout>
      <h2 className="flex justify-center mb-6 mt-24 text-4xl font-bold text-black">
        Dashboard
      </h2>
      <div className="flex justify-between">
        <div className="flex mt-8">
          <div className="max-w-sm mr-14 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#"></a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Your Campaigns
                </h5>
              </a>
              <p className="flex justify-center mb-3 mt-8 font-normal text-gray-300 dark:text-gray-400">
                {fund[1] ? (
                  <div>
                    <CampaignCard
                      name={fund[1]}
                      description={fund[6]}
                      img={fund[7]}
                      goal={fund[8]}
                    />
                  </div>
                ) : (
                  "No campaigns yet"
                )}
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="#"></a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Your Donations
                </h5>
              </a>
              <div className="mb-3 mt-8 text-gray-700 dark:text-gray-400">
                💸{" "}
                <span className="font-mono font-bold text-green-500">64$ </span>{" "}
                ==={">"}{" "}
                <a href="/safe-the-whales">
                  <span className="italic underline">Save the Whales!</span>
                </a>
              </div>
              <div className="mb-3 mt-8 text-gray-700 dark:text-gray-400">
                💸{" "}
                <span className="font-mono font-bold text-green-500">42$ </span>{" "}
                ==={">"}{" "}
                <a href="/safe-the-whales">
                  <span className="italic underline">Potato Farm</span>
                </a>
              </div>
              <div className="mb-3 mt-8 text-gray-700 dark:text-gray-400">
                💸{" "}
                <span className="font-mono font-bold text-green-500">70$ </span>{" "}
                ==={">"}{" "}
                <a href="/safe-the-whales">
                  <span className="italic underline">Freelearner</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="mb-10 text-black font-semibold">Your Karma</p>
          <div className="flex justify-between">
            <div>
              <span>👶</span>
              <p className="text-black text-xs">Beginner</p>
            </div>
            <div>
              <span className="flex justify-end">👵</span>
              <p className="text-black text-xs">Mother Teresa</p>
            </div>
          </div>
          <div className="bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-violet-400 h-2.5 rounded-full w-72"></div>
          </div>
          <div>
            <div className="flex mt-8">
              <div className="max-w-sm mr-14 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#"></a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Note of thanks
                    </h5>
                  </a>
                  <div className="mr-14">
                    <div className="flex justify-center mb-3 mt-8 font-normal text-gray-300 dark:text-gray-400">
                      <img
                        className="rounded-full w-9 h-9"
                        src="/random.jpeg"
                        alt="profile picture"
                      />
                      <div className="ml-2 text-black">
                        Thank you for your contribution!🐳
                        <br />
                        <span className="font-mono">-Chad</span>{" "}
                        <span className="italic font-semibold">
                          // Save the Whales
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center mb-3 mt-8 font-normal text-gray-300 dark:text-gray-400">
                    <img
                      className="rounded-full w-9 h-9"
                      src="/matheus.jpeg"
                      alt="profile picture"
                    />
                    <div className="ml-2 text-black">
                      Finally I can stop teaching, and <br />
                      focus on the important things in life, thank you!
                      <br />
                      <span className="font-mono">-Matheus</span>{" "}
                      <span className="italic font-semibold">
                        // Potato Farm
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
