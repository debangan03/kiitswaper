import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {MdAccountCircle} from 'react-icons/Md'
import { getServerSession } from "next-auth";
import Link from 'next/link'
import Signout from '../Signout'


async function Navbar(){
    const login = await getServerSession();
    if(login){
    return (
        <nav className="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <a className="ml-2 text-xl text-neutral-800 " href="#">
                    KIIT-Swapper
                </a>
                <div className="ml-5 flex w-[30%] items-center justify-between">
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
                    <Signout/>
                </div>

            </div>
        </nav>

    )
}
else{
    return (
        <nav className="relative flex w-full flex-wrap items-center justify-between bg-[#FBFBFB] py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <a className="ml-2 text-xl text-neutral-800 " href="#">
                    KIIT Swapper
                </a>
                <div className="ml-5 flex w-[30%] items-center justify-between">
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
                    
                     {/* <span className='text-xl'>
                        <Link href={"/auth/signin"}>
                        <button className='px-4 py-2 bg-purple-400 rounded text-black'>Login</button></Link>
                        </span> */}
                        
                    
                </div>

            </div>
        </nav>

    )
}
}

export default Navbar;