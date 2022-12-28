import ConnectButton from "./ConnectButton";

export default function Nav() {
  return (
    <nav className="flex h-9 items-center justify-between" aria-label="Global">
      <div className="lg:flex-1">
        <a href="/">
          <img src="/logo.svg" className="h-24 scale-150" />
        </a>
      </div>
      <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
        <a
          href="/openFund"
          className="font-semibold text-gray-900 hover:text-gray-900"
        >
          Open Fund
        </a>

        <a
          href="/explore"
          className="font-semibold text-gray-900 hover:text-gray-900"
        >
          Explore
        </a>

        <a
          href="/dashboard"
          className="font-semibold text-gray-900 hover:text-gray-900"
        >
          Dashboard
        </a>

        <a href="#" className="font-semibold text-gray-900 hover:text-gray-900">
          About
        </a>
      </div>
      <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
        <ConnectButton />
      </div>
    </nav>
  );
}
