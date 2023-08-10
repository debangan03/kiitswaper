"use client";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Accountdata({ login ,data}) {
  const [names, setnames] = useState("");
  const [phone, setphone] = useState("");
  const [roll, setroll] = useState("");
  const [branch, setbranch] = useState("");
  const [year, setyear] = useState("");
  const [semester, setsemester] = useState("");
  const [section, setsection] = useState("");
  const [email, setemail] = useState("");
  let response;
  useEffect(() => {
      response=data
      setnames(response.user.name)
      setphone(response.user.phone)
      setemail(response.user.email)
      setroll(response.user.roll)
      setbranch(response.user.branch)
      setsemester(response.user.semester)
      setyear(response.user.year)
      setsection(response.user.section)
  }, []);

  const handleChange=(e)=>{
    e.preventDefault()
    if(e.target.name==="phone")
    {
      setphone(e.target.value)
    }
    if(e.target.name==="year")
    {
      setyear(e.target.value)
    }
    if(e.target.name==="semester")
    {
      setsemester(e.target.value)
    }
    if(e.target.name==="section")
    {
      setsection(e.target.value)
    }
  }

  const submitupdate = async (e) => {
    let email = login.user.email;
    e.preventDefault();
    const data = {
      email:email,
      phone:phone,
      year:year,
      semester:semester,
      section:section,
    };

    let res = await fetch(`/api/updateac`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();
    console.log(response.success);

    if (response.success === "true") {

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
        window.location.reload()
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
      {login && (
        <section className="text-gray-600 body-font max-h-screen">
          <div className="container px-5 pt-10 mx-auto">
            <div className="flex flex-col text-center w-full mb-4">
              <div className="rounded-full flex items-center   justify-center space-x-2 px-10">
                <div>
                  {" "}
                  <img
                    src={login.user.image}
                    width={150}
                    height={150}
                    alt="iugriug"
                    className="rounded-full p-2"
                  />
                </div>
                <div className="right"><span className="text-4xl text-blue-400">Hi! </span> <span className="text-blue-400 text-2xl">{names}</span></div>
              </div>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Name
                    </label>
                    <input
                    readOnly={true}
                    value={names}
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Roll Number
                    </label>
                    <input
                    readOnly={true}
                    value={roll}
                      type="text"
                      id="Roll Number"
                      name="Roll Number"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Email
                    </label>
                    <input
                    readOnly={true}
                    value={email}
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Phone
                    </label>
                    <input
                    onChange={handleChange}
                    value={phone}
                      type="text"
                      id="phone"
                      name="phone"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Branch
                    </label>
                    <input
                    onChange={handleChange}
                    readOnly={true}
                    value={branch}
                      type="text"
                      id="branch"
                      name="branch"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Year
                    </label>
                    <input
                    onChange={handleChange}
                    value={year}
                      type="text"
                      id="Year"
                      name="year"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Semester
                    </label>
                    <input
                    onChange={handleChange}
                    value={semester}
                      type="text"
                      id="semester"
                      name="semester"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Section
                    </label>
                    <input
                    onChange={handleChange}
                    value={section}
                      type="text"
                      id="section"
                      name="section"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>

                <div className="p-2 w-full">
                  <button type="button" className="flex mx-auto my-8 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg" onClick={submitupdate}>
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Accountdata;
