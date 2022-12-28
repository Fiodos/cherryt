export default function UserFeedback() {
  return (
    <div className="mt-12">
      <h2 className="flex justify-center text-4xl font-bold text-black mb-10">
        How was it like to raise via cherryt?
      </h2>
      <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              I am feeling like Bill Gates
            </h3>
            <p className="my-4 font-light">
              "After I made a fortune longing Shiba Inu on 125x leverage, I
              wasn't sure what to do with my money. Thank God there is Cherryt,
              now I can help people in need and feel like a philanthropist."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src="/bored_ape.jpeg"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium text-black text-left">
              <div>Bonnie Green</div>
              <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                Degen
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Who the hell is gofundme?
            </h3>
            <p className="my-4 font-light">
              "It took me ~12 months to collect 10k$ on gofundme. Cherryt did it
              in 2 days. I am so happy I can finally buy a new car."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src="/su.png"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium text-black text-left">
              <div>Su Zhu</div>
              <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                Trader
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Long live decentralized funding!
            </h3>
            <p className="my-4 font-light">
              "The obstacles of centralized funding are huge. Now, I can finally
              raise money for my project without having to deal with
              bureaucracy."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-8 h-9"
              src="random_dude.jpeg"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium text-black text-left">
              <div>Brian Jackson</div>
              <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                Founder of Jackson Solution
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              This platform enables good things in the world.
            </h3>
            <p className="my-4 font-light">
              "I am so happy to be able to help people in need. Cherryt is a
              great platform for people who want to do good."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <img
              className="rounded-full w-9 h-9"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium text-black text-left">
              <div>Roberta Casa</div>
              <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                Social Initiatives Coordinator
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
