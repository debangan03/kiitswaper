"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useState } from 'react'

function Dashboard({data,swap,login}) {
  const [details, setdetails] = useState(true)
  const [view, setview] = useState(false)
  useEffect(() => {
    if(swap.success=='true')
    {
      setdetails(false)
    }
  }, [])
  useEffect(() => {
    if(data){
    for(let i of data){
      if(i.section1!="empty")
      {
        setview(true)
      }
    }
  }
  }, [])
  
let name;
let section;
  const sendnoti=async()=>{
    const res = await fetch('/api/getname',{
      method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email:login.user.email}),
    })
    const response = await res.json();
    console.log(response.user.name); 
    name =response.user.name;
    section = response.user.section
    const data = {
      name:name,
      email:login.user.email,
      section:section,
      message:"hi ! you have one swap request"
    }
    const res1 = await fetch('/api/addmessages',{
      method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    const response1 = await res1.json();
    console.log(response1);
  }
  



  return (
    
    <>
    {details &&<div
    id="marketing-banner"
    tabIndex={-1}
    className="fixed z-50 flex my-12 flex-col md:flex-row justify-between w-[calc(100%-2rem)] p-4 -translate-x-1/2 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl left-1/2 top-6 dark:bg-gray-700 dark:border-gray-600"
  >
    <div className="flex flex-col items-start mb-3 mr-4 md:items-center md:flex-row md:mb-0">
      <a
        href="https://flowbite.com/"
        className="flex items-center mb-2 border-gray-200 md:pr-4 md:mr-4 md:border-r md:mb-0 dark:border-gray-600"
      >
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-6 mr-2"
          alt="Flowbite Logo"
        />
        
      </a>
      <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
        To opt for section swap , you have to fill your details first
      </p>
    </div>
    <div className="flex items-center flex-shrink-0">
      <Link
        href="/SectionData"
        className="px-5 py-2 mr-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Fill Swap Details
      </Link>
      <button
        data-dismiss-target="#marketing-banner"
        type="button"
        className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
      >
      </button>
    </div>
  </div>}
  


    <div className='mt-20'>
        <h1 className='my-4 text-2xl font-bold text-center'>All options</h1>
        <hr className='w-[30%] border-2 border-blue-600 mx-auto mb-10'/>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Roll No
          </th>
          <th scope="col" className="px-6 py-3">
            Section
          </th>
          <th scope="col" className="px-6 py-3">
            Phone
          </th>
          <th scope="col" className="px-6 py-3">
            Needed sec
          </th>
          <th scope="col" className="text-center py-3">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
       {view && Object.values(data).map((item,i)=> <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {item.name}
          </th>
          <td className="px-6 py-4">{item.roll}</td>
          <td className="px-6 py-4">{item.section}</td>
          <td className="px-6 py-4">{item.phone}</td>
          <td className="px-6 py-4"><span>{item.section1}</span>{item.section2!=="empty" && <span>/ {item.section2}</span>} {item.section3!=="empty" && <span>/ {item.section3}</span>} {item.section4!=="empty" && <span>/ {item.section4}</span>}</td>
          <td className="px-6 py-4 md:ml-3 flex items-center justify-center space-x-10">

            <a
              href="/"
              className="font-medium text-blue-600 dark:text-blue-500 hover:text-blue-400"
            >
              Contact
            </a>
            <button
              onClick={sendnoti}
              className="font-medium text-blue-600 dark:text-blue-500 hover:text-blue-400"
            >
              Send swap request
            </button>
          </td>
        </tr>) }
      
      </tbody>
    </table>
  </div>
  </div>
  </>
  )
}

export default Dashboard