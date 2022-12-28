export default function Hero() {
  return (
    <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
      <div>
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div>
          <h1 className="text-black text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
            Share your aped gains
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
            Instead of betting your hard aped money into another shitcoin, what
            about giving to people or projects in need?
          </p>
          <div className="mt-8 flex gap-x-4 sm:justify-center">
            <a
              href="#"
              className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
            >
              Create
              <span className="text-indigo-200" aria-hidden="true">
                &rarr;
              </span>
            </a>
            <a
              href="#"
              className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
            >
              Get involved
              <span className="text-gray-400" aria-hidden="true">
                &rarr;
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
