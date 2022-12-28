import Follow from "./Follow";
import Legal from "./Legal";
import Recources from "./Recources";
import Socials from "./Socials";

export default function Footer() {
  return (
    <div className="mt-52">
      <footer className="p-4 bg-white sm:p-6 dark:bg-gray-900">
        <div className="md:flex md:justify-between border-t">
          <div className="mb-6 md:mb-0 mt-20">
            <a href="/" className="flex items-center">
              <span
                role="img"
                aria-label="Alien"
                className="font-bold text-xl pt-10"
              >
                🍒
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 mt-10">
            <Recources />
            <Follow />
            <Legal />
          </div>
        </div>
        <hr className="my-6 text-black sm:mx-auto dark:border-gray-700 lg:my-8" />
        <Socials />
      </footer>
    </div>
  );
}
