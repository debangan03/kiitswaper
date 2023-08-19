"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { CgMenuGridO, CgClose } from "react-icons/cg";

function LogoutNav() {
  const [mobile, setmobile] = useState(false)
  return (
    // <nav className="relative flex w-screen flex-wrap items-center justify-between  bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
    //         <div className="flex w-full flex-wrap items-center justify-between px-3">
    //         <Link className="ml-2 text-xl text-neutral-800 " href={'/'}>
    //                 KIIT-Swapper
    //             </Link>
    //             <div className="ml-5 flex w-[30%] items-center justify-between">
    //                 <input
    //                     type="search"
    //                     className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none "
    //                     placeholder="Search"
    //                     aria-label="Search"
    //                     aria-describedby="button-addon2"
    //                 />
    //                 {/*Search icon*/}
    //                 <span
    //                     className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center font-normal text-2xl text-neutral-700 dark:text-neutral-200"
    //                     id="basic-addon2"
    //                 ><BiSearch/>
    //                 </span>

    //                  {/* <span className='text-xl'>
    //                     <Link href={"/auth/signin"}>
    //                     <button className='px-4 py-2 bg-purple-400 rounded text-black'>Login</button></Link>
    //                     </span> */}

    //             </div>

    //         </div>
    //     </nav>
    <nav className="bg-slate-950 shadow-xl shadow-slate-800 sticky top-0 py-2 z-30">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        <div
          className="absolute inset-y-0 left-0 flex items-center sm:hidden"
          onClick={() => {
            setmobile(!mobile);
            
          }}
        >
          <button
            type="button"
            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>

            {!mobile && <CgMenuGridO className="text-xl text-white" />}
            {mobile && <CgClose className="text-xl text-white" />}

            <svg
              className="hidden h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <Link href={"/"} className="flex flex-shrink-0 items-center">
            <h1 className="text-gray-200 hover:text-purple-500 font-semibold text-xl hover:scale-95 cursor-pointer">
              KIIT Swapper
            </h1>
          </Link>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex items-center space-x-4">
              <Link
                href={"/"}
                className="text-gray-300 hover:scale-95 hover:text-purple-500 rounded-md px-3 py-2 text-[1rem] font-medium"
              >
                About
              </Link>
              <Link
                href={"/"}
                className="text-gray-300 hover:scale-95 hover:text-purple-500 rounded-md px-3 py-2 text-[1rem] font-medium"
              >
                Manual
              </Link>
              <Link
                href={"/"}
                className="text-gray-300 hover:scale-95 hover:text-purple-500 rounded-md px-3 py-2 text-[1rem] font-medium"
              >
                Feedback
              </Link>
            </div>
          </div>
        </div>
      
      </div>
    </div>

    {mobile && (
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            href={"/"}
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            About
          </Link>
          <Link
            href={"/"}
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Manual
          </Link>
          <Link
            href={"/"}
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Feedback
          </Link>
        </div>
      </div>
    )}
  </nav>
  );
}

export default LogoutNav;
