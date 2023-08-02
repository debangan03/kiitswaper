"use client"
import React from 'react'
import {BiSearch} from 'react-icons/bi'
import Link from 'next/link'
import { signOut } from "next-auth/react";
import { VscAccount } from 'react-icons/vsc'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginNav() {
    const [dropdown, setdropdown] = useState(false)
    const logout=()=>
    {
        

          toast.success('Logging you out!!', {
            position: "bottom-left",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            setTimeout(() => {
                signOut({
                    callbackUrl:
                      process.env.VERCEL_URL || "http://localhost:3000",
                  })
              }, 500);

    }
  return (
    <><ToastContainer
    position="bottom-left"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"/>
    
    <nav className="relative flex w-screen flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
            <div className="md:flex w-full flex-wrap items-center justify-between px-3">
                <a className="ml-2 text-xl text-neutral-800 " href="#">
                    KIIT-Swapper
                </a>
                <div className="ml-5 flex w-[90%] md:w-[30%] items-center justify-between">
                    <input
                        type="search"
                        className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none "
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon2"
                    />
                    {/*Search icon*/}
                    <span
                        className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center font-normal text-2xl text-neutral-700 dark:text-neutral-200"
                        id="basic-addon2"
                    ><BiSearch/>
                    </span>
                    
                     {/* <span className='text-3xl'>
                        <MdAccountCircle/>
                        </span> */}
                    {/* <Signout/> */}
                    <VscAccount className='text-2xl' onMouseOver={()=>setdropdown(true)}/>
                    {dropdown && <div onMouseLeave={()=>setdropdown(false)} className='w-30 p-2 bg-slate-200 h-fit absolute top-[49px] right-5 text-[0.8rem] font-semibold rounded-md'>
                        <ul>
                            <Link href={"/Accounts"}>
                            <li className=' hover:text-blue-700 cursor-pointer'>
                                My Account
                            </li>
                            </Link>
                            <li className='mt-2  hover:text-blue-700 cursor-pointer' onClick={logout}>
                                Log Out
                            </li>
                        </ul>
                        
                    </div>}
                </div>

            </div>
        </nav>
        </>
  )
}

export default LoginNav;