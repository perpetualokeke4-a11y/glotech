 "use client"
import Link from "next/link";
import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";

export function Navbar(){
    const [dropDown,setDropDown] = useState(false);

    const toggleMenu = ()=>{
        setDropDown(!dropDown);
    }
    return(
        <main className="bg-blue-500 shadow shadow-gray-300 w-full fixed z-3 top-0">
            <div className="h-15 px-5 flex justify-between text- items-center">
                <h1 className="text-3xl font-bold text-white">GLOTECH GLOBAL</h1>
                <ul className=" text-white text-2xl  hidden md:flex  md:gap-8 md:text-lg md:font-semibold">
                    <Link href="/auth/login"><li>Home</li></Link>
                    <Link href="/dashboard/computer-accessories"><li>Computer-Accessories</li></Link>
                    <Link href="/dashboard/solar-item"><li>Solar-Items</li></Link>
                    <Link href="/dashboard/location"><li>Location</li></Link>
                   
                </ul>
                 <div  className="block  md:hidden lg:hidden">
                    <RiMenu3Fill onClick={toggleMenu} className="text-3xl text-white" />
                 </div>
            </div>
            {dropDown && (
            <div className="flex flex-col gap-3 justify-center items-center md:hidden">
                <ul className="flex flex-col gap-5 text-sm text-white font-semibold">
                    <Link href="/auth/login"><li>Home</li></Link>
                    <Link href="/dashboard/computer-accessories"><li>Computer-Accessories</li></Link>
                    <Link href="/dashboard/solar-item"><li>Solar-Items</li></Link>
                    <Link href="/dashboard/location"><li>Location</li></Link>

                    
                </ul>
                <Link href="/auth/login">
                <div>
                    <button className="w-15 h-9 text-white bg-black rounded-md cursor-pointer">Login</button>
                </div>
               </Link>
            </div>
            )}

        </main>
    )
}