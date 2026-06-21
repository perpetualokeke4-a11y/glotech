     "use client";
import { useState } from "react";     
import Link from "next/link";


  export default function Navbar(){
    const [dropDown,setDropDown] = useState(false);

    const toggleMenu = ()=>{
        setDropDown(!dropDown);
    }
  
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

        {dropDown && (
  <div className="md:hidden bg-blue-700 px-5 py-4 space-y-4 text-white font-semibold">

    <Link href="/" onClick={() => setDropDown(false)}>
      Home
    </Link>

    <Link href="/dashboard/computer-accessories" onClick={() => setDropDown(false)}>
      Computer-Accessories
    </Link>

    <Link href="/dashboard/solar-item" onClick={() => setDropDown(false)}>
      Solar-Items
    </Link>

    <Link href="/dashboard/location" onClick={() => setDropDown(false)}>
      Location
    </Link>

  </div>
)}
        {/* Mobile Menu */}
        <button className="text-white md:hidden" onClick={toggleMenu}>
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