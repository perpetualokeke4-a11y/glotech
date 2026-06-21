"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [dropDown, setDropDown] = useState(false);

  const toggleMenu = () => {
    setDropDown(!dropDown);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-blue-600/95 backdrop-blur-md shadow-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-10 md:py-4">

        {/* Logo */}
        <div>
          <h1 className="text-xl font-extrabold tracking-wide text-white sm:text-2xl md:text-3xl">
            GLOTECH GLOBAL
          </h1>

          <p className="hidden text-sm font-bold text-blue-100 md:block lg:text-xl">
            Computer & Solar Limited
          </p>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 text-base font-semibold md:flex lg:gap-10 lg:text-lg">
          <li>
            <Link href="/" className="text-white hover:text-yellow-300">
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/computer-accessories"
              className="text-white hover:text-yellow-300"
            >
              Computer Accessories
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/solar-item"
              className="text-white hover:text-yellow-300"
            >
              Solar Items
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/location"
              className="text-white hover:text-yellow-300"
            >
              Location
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="text-white md:hidden"
          onClick={toggleMenu}
        >
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

      {/* Mobile Menu */}
      {dropDown && (
        <div className="md:hidden flex flex-col bg-blue-700">

          <Link
            href="/"
            onClick={() => setDropDown(false)}
            className="px-6 py-4 text-white hover:bg-blue-600 border-b border-blue-500"
          >
            Home
          </Link>

          <Link
            href="/dashboard/computer-accessories"
            onClick={() => setDropDown(false)}
            className="px-6 py-4 text-white hover:bg-blue-600 border-b border-blue-500"
          >
            Computer Accessories
          </Link>

          <Link
            href="/dashboard/solar-item"
            onClick={() => setDropDown(false)}
            className="px-6 py-4 text-white hover:bg-blue-600 border-b border-blue-500"
          >
            Solar Items
          </Link>

          <Link
            href="/dashboard/location"
            onClick={() => setDropDown(false)}
            className="px-6 py-4 text-white hover:bg-blue-600"
          >
            Location
          </Link>

        </div>
      )}
    </nav>
  );
}