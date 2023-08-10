"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

function UpdateData({ login }) {
  const router=useRouter()
  const [section, setsection] = useState("");
  const [section1, setsection1] = useState("");
  const [section2, setsection2] = useState("empty");
  const [section3, setsection3] = useState("tmpty");
  const [section4, setsection4] = useState("tmpty");
  const [disable, setdisable] = useState(true);

  const handleChange=(e)=>{
    e.preventDefault()
    if(e.target.name==="section")
    {
      setsection(e.target.value)
    }
    if(e.target.name==="section1")
    {
      setsection1(e.target.value)
    }
    if(e.target.name==="section2")
    {
      setsection2(e.target.value)
    }
    if(e.target.name==="section3")
    {
      setsection3(e.target.value)
    }
    if(e.target.name==="section4")
    {
      setsection4(e.target.value)
    }

    if(section && section1)
    {
      setdisable(false)
    }
  }

  const submitupdate = async (e) => {
    let email = login.user.email;
    e.preventDefault();
    if(!section2)
    {setsection2("empty")}
    if(!section3)
    {setsection3("empty")}
    if(!section4)
    {setsection4("empty")}
    const data = {
      email: email,
      section: section,
      section1: section1,
      section2: section2,
      section3: section3,
      section4: section4,
    };

    let res = await fetch(`/api/updatedata`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response.success);

    if (response.success === "true") {
      setsection("");
      setsection1("");
      setsection2("empty");
      setsection3("empty");
      setsection4("empty");

      toast.success("Congrats! Your data for section swap is updated..", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        router.push("/")
      }, 1500);
    }
  }
    return (
      <>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <h1 className="text-2xl font-bold text-center mt-44">Fill details</h1>
        <hr className="w-[30%] border-2 border-blue-600 mx-auto mb-10" />
        <form>
          <div className="flex md:flex-cols md:space-x-5 md:px-96 flex-rows items-center">
            <div className="relative z-0 w-full mb-6 group">
              <input
                onChange={handleChange}
                type="text"
                name="section"
                id="floating_company"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_company"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Section You Have
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                onChange={handleChange}
                type="text"
                name="section1"
                id="floating_company"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_company"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Section You Want (1st preference)
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-3 md:gap-6 my-4 mx-auto px-96">
            <div className="relative z-0 w-full mb-6 group">
              <input
                onChange={handleChange}
                type="text"
                name="section2"
                id="floating_company"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_company"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Section You Want (2nd preference)
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                onChange={handleChange}
                type="text"
                name="section3"
                id="floating_company"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_company"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Section You Want (3rd preference)
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                onChange={handleChange}
                type="text"
                name="section4"
                id="floating_company"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_company"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Section You Want (4th preference)
              </label>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="disabled:bg-blue-400 disabled:cursor-not-allowed my-8 bg-blue-600 text-white hover:bg-blue-800 px-4 py-2 rounded-md"
              type="button"
              disabled={disable}
              onClick={submitupdate}
            >
              Submit
            </button>
          </div>
          <p className="text-center text-[0.75rem] my-1 text-red-500">
          *First two fields are required
        </p>
        </form>
      </>
    );
  };


export default UpdateData;
