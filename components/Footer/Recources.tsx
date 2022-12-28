export default function Recources() {
  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold text-black uppercase">
        Resources
      </h2>
      <ul className="text-black dark:text-green-400">
        <li className="mb-4">
          <a
            href="https://nextjs.org/"
            className="font-sans text-xs hover:underline"
          >
            next.js
          </a>
        </li>
        <li className="mb-4">
          <a
            href="https://flowbite.com/"
            className="font-sans text-xs hover:underline"
          >
            Flowbite
          </a>
        </li>
        <li>
          <a
            href="https://tailwindcss.com/"
            className="font-sans text-xs hover:underline"
          >
            Tailwind CSS
          </a>
        </li>
      </ul>
    </div>
  );
}
