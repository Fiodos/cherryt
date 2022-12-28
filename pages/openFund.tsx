import { ethers } from "ethers";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { address } from "../utils/constants";
import { create, IPFSHTTPClient } from "ipfs-http-client";
import Nav from "../components/Nav";
import ABI from "../utils/abi.json";
import Footer from "../components/Footer/Footer";
import UploadArea from "../components/UploadArea";
import CampaignInfo from "../components/CampaignInfo";
import CreateCampaignButton from "../components/CreateCampaignButton";

export default function OpenFund() {
  const router = useRouter();
  const [clientIpfs, setClientIpfs] = useState<IPFSHTTPClient>();
  const [coverUrl, updateCoverUrl] = useState<string>(``);

  useEffect(() => {
    getClient();
  }, []);

  async function getSigner() {
    const provider = new ethers.providers.Web3Provider(
      (window as any).ethereum
    );
    const signer = provider.getSigner();
    return signer;
  }

  async function getClient() {
    // the .env vars aren't read
    const auth =
      "Basic " +
      Buffer.from(
        process.env.INFURA_ID + ":" + process.env.INFURA_SECRET
      ).toString("base64");

    // create IPFS client
    const clientIpfs = create({
      host: "ipfs.infura.io",
      port: 5001,
      protocol: "https",
      apiPath: "/api/v0",
      headers: {
        authorization: auth,
      },
    });
    setClientIpfs(clientIpfs);
  }

  // uploads automatically to IPFS
  async function setCover(e: any) {
    const cover = e.target?.files[0];
    try {
      const added = await clientIpfs?.add(cover);
      const url = `https://lenspad.infura-ipfs.io/ipfs/${added?.path}`;
      updateCoverUrl(url);
      console.log("set cover: ", url);
    } catch (error) {
      console.log("Error uploading cover: ", error);
    }
  }

  async function createCampaign() {
    const contract = new ethers.Contract(address, ABI, await getSigner());
    try {
      const tx = await contract.createfund(
        (document.getElementById("name") as HTMLInputElement).value,
        (document.getElementById("address") as HTMLInputElement).value,
        (document.getElementById("description") as HTMLInputElement).value,
        coverUrl
      );
      await tx.wait();
      router.reload();
      console.log("Campaign created: " + tx.hash);
    } catch (error) {
      console.log("Error while creating campaign: ", error);
    }
  }

  return (
    <div className="isolate bg-white">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#9089FC"></stop>
              <stop offset="1" stop-color="#FF80B5"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <Nav />
        </div>
      </div>
      <h2 className="flex justify-center mb-6 mt-24 mt- text-4xl font-bold text-black">
        Create your own campaign
      </h2>
      <div className="flex justify-around mt-36">
        <UploadArea coverUrl={coverUrl} setCover={setCover} />
        <CampaignInfo />
      </div>
      <div className="flex justify-center">
        <CreateCampaignButton createCampaign={createCampaign} />
      </div>
      <Footer />
    </div>
  );
}
