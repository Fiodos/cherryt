import Nav from "../components/Nav";
import Footer from "../components/Footer/Footer";
import ExploreCard from "../components/ExploreCard";

const campaigns = [
  {
    campaignName: "Save the Whales",
    campaignDescription: "We are trying to save the whales!.",
    campaignImage: "/whales.jpeg",
    campaignGoal: "75000",
  },
  {
    campaignName: "My mom needs an operation",
    campaignDescription:
      "My mom needs an operation to save her life. Please help me raise money to pay for the operation.",
    campaignImage: "/hospital.png",
    campaignGoal: "20000",
  },
  {
    campaignName: "Creating a safespace for dogs in Romania",
    campaignDescription:
      "We are a team of dog lovers who want to create a safe space for dogs in Romania. We want to raise money to buy a piece of land and build a shelter for dogs. We also plan to employ a small staff which takes care of the dogs.",
    campaignImage: "/dogs.png",
    campaignGoal: "100000",
  },
  {
    campaignName: "Create a new building for freelearner",
    campaignDescription:
      "Many cities have plenty of open-spaces for knowledge workers like programmers, other kinds of freelancer etc. We want to create an open-space for learner, which we call 'freelearner'.",
    campaignImage: "/open_space.png",
    campaignGoal: "200000",
  },
];

export default function Explore() {
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
        Explore Campaigns
      </h2>
      <div className="flex justify-center mt-36">
        <div className="grid grid-cols-2 gap-56">
          {campaigns.map((campaign, index) => (
            <ExploreCard
              name={campaign["campaignName"]}
              description={campaign["campaignDescription"]}
              img={campaign["campaignImage"]}
              goal={campaign["campaignGoal"]}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
