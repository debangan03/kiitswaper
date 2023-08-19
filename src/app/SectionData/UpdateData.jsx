"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

function UpdateData({ login }) {
  const router = useRouter();
  const [section, setsection] = useState("");
  const [section1, setsection1] = useState("");
  const [section2, setsection2] = useState("empty");
  const [section3, setsection3] = useState("empty");
  const [section4, setsection4] = useState("empty");
  const [disable, setdisable] = useState(true);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "section") {
      setsection(e.target.value);
    }
    if (e.target.name === "section1") {
      setsection1(e.target.value);
    }
    if (e.target.name === "section2") {
      setsection2(e.target.value);
    }
    if (e.target.name === "section3") {
      setsection3(e.target.value);
    }
    if (e.target.name === "section4") {
      setsection4(e.target.value);
    }

    if (section && section1) {
      setdisable(false);
    }
  };

  const submitupdate = async (e) => {
    e.preventDefault();
    let email = login.user.email;

    if (!section2) {
      setsection2("empty");
    }
    if (!section3) {
      setsection3("empty");
    }
    if (!section4) {
      setsection4("empty");
    }
    const data = {
      email: email,
      section: section,
      section1: section1,
      section2: section2,
      section3: section3,
      section4: section4,
    };
    console.log(data);

    let res = await fetch(`/api/updatedata`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();

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
        window.location = "http://localhost:3000";
      }, 1500);
    }
  };
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
      <div>
        <h1 className="mb-4 text-center mt-20 text-2xl font-bold text-cente capitalize text-purple-200">
          Enter Your Section Details
        </h1>
        <hr className="w-[30%] border-2 border-purple-500 mx-auto px-10 mb-10" />
        <form className="w-[50vw] md:p-[100px] mx-auto my-10" onSubmit={(e)=>submitupdate(e)}>
          <div className="relative z-0 w-full mb-6 group">
            <input
              onChange={handleChange}
              type="text"
              name="section"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              placeholder=" "
              required=""
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-300  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Current Section<sup className="text-red-500">*</sup>
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              onChange={handleChange}
              value={section1}
              type="text"
              name="section1"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
              placeholder=""
              required=""
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-300  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Section 1{" "}
              <span className="text-[0.7rem]">
                (1<sup>st</sup> preference)<sup className="text-red-500">*</sup>
              </span>
            </label>
          </div>

          <div className="grid md:grid-cols-3 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                onChange={handleChange}
                type="text"
                name="section2"
              
                className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-300  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Section 2{" "}
                <span className="text-[0.7rem]">
                  (2<sup>nd</sup> preference)
                </span>
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                onChange={handleChange}
                type="text"
                name="section3"
            
                className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-300  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Section 3{" "}
                <span className="text-[0.7rem]">
                  (3<sup>rd</sup> preference)
                </span>
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                onChange={handleChange}
                type="text"
                name="section4"
                className="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-300  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Section 4{" "}
                <span className="text-[0.7rem]">
                  (4<sup>th</sup> preference)
                </span>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-center mt-4">
            <button
              disabled={disable}
              type="submit"
              className=" text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 disabled:cursor-not-allowed disabled:bg-purple-400 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Submit
            </button>
          </div>
          <p className="text-center text-[0.75rem] my-2 text-red-500">
              *All fields are required
            </p>
        </form>
      </div>
    </>
  );
}

export default UpdateData;
