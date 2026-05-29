import Link from "next/link";

export default function Navbar() {
  
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-blue-600/95 backdrop-blur-md shadow-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-10 md:py-4">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-extrabold tracking-wide text-white sm:text-3xl">
            GLOTECH GLOBAL
          </h1>

          <p className="hidden text-xl font-bold text-blue-100 md:block">
            Computer & Solar Limited
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="hidden items-center gap-6 text-base font-semibold md:flex lg:gap-10 lg:text-lg">

          {/* Home */}
          <li>
            <Link
              href="/"
              className="relative text-white transition hover:text-yellow-300"
            >
              Home
            </Link>
          </li>

          {/* Computer */}
          <li>
            <Link
              href="/dashboard/computer-accessories"
              className="relative text-white transition hover:text-yellow-300"
            >
              Computer-Accessories
            </Link>
          </li>

          {/* Solar */}
          <li>
            <Link
              href="/dashboard/solar-item"
              className="relative text-white transition hover:text-yellow-300"
            >
              Solar-Items
            </Link>
          </li>

          {/* Location */}
          <li>
            <Link
              href="/dashboard/location"
              className="relative text-white transition hover:text-yellow-300"
            >
              Location
            </Link>
          </li>

        </ul>

        {/* Mobile Menu */}
        <button className="text-white md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

      </div>
    </nav>
  );
}