"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ClientData({ login, response }) {
  const router = useRouter();
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [roll, setroll] = useState("");
  const [branch, setbranch] = useState("");
  const [year, setyear] = useState("");
  const [semester, setsemester] = useState("");
  const [section, setsection] = useState("");
  const [disable, setdisable] = useState(true);
  const [disp, setdisp] = useState(false);
  useEffect(() => {
    if (response.success) {
      router.push("http://localhost:3000");
    } else {
      setdisp(true);
    }
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.name === "name") {
      setname(e.target.value);
    }
    if (e.target.name === "phone") {
      setphone(e.target.value);
    }
    if (e.target.name === "roll") {
      setroll(e.target.value);
    }
    if (e.target.name === "year") {
      setyear(e.target.value);
    }
    if (e.target.name === "branch") {
      setbranch(e.target.value);
    }
    if (e.target.name === "semester") {
      setsemester(e.target.value);
    }
    if (e.target.name === "section") {
      setsection(e.target.value);
    }

    if (name && phone && roll && branch && year && semester && section) {
      setdisable(false);
    }
  };
  const submitres = async (e) => {
    setdisable(true);
    toast.info("Please wait while your form is submitting..", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    let em = login.user.email;
    e.preventDefault();

    const data = {
      name: name,
      phone: phone,
      email: em,
      roll: roll,
      branch: branch,
      year: year,
      semester: semester,
      section: section,
    };

    let res = await fetch(`/api/addUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let response = await res.json();

    if (response.success === "true") {
      setname("");
      setroll("");
      setphone("");
      setbranch("");
      setsemester("");
      setyear("");
      setsection("");

      toast.success("Congrats! Your data is updated..", {
        position: "bottom-left",
        autoClose: 200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        window.location = "http://localhost:3000";
      }, 500);
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
      {disp && (
        <>
          <h1 className="my-4 text-center text-2xl font-bold text-cente capitalize text-purple-200">
            Enter Your Details
          </h1>
          <hr className="w-[30%] border-2 border-purple-500 mx-auto px-10 mb-10" />
          <form className="w-[50vw] mx-auto my-10" onSubmit={submitres}>
            <div className="relative z-0 w-full mb-6 group">
              <input
                value={name}
                onChange={handleChange}
                type="text"
                name="name"
                id="floating_name"
                className="block py-2.5 px-0 w-full text-[0.7rem] text-gray-50  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_name"
                className="peer-focus:font-medium absolute text-[0.7rem] text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
                <span className="text-red-500 "> *</span>
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                value={phone}
                onChange={handleChange}
                type="tel"
                name="phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full text-[0.7rem] text-gray-50  bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                placeholder=""
                required=""
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-[0.7rem] text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Whatsapp Number (123-456-7890){" "}
                <span className="text-red-500 "> *</span>
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                value={roll}
                onChange={handleChange}
                type="text"
                name="roll"
                className="block py-2.5 px-0 w-full text-[0.7rem] text-gray-50  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_roll"
                className="peer-focus:font-medium absolute text-[0.7rem] text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Roll Number <span className="text-red-500 "> *</span>
              </label>
            </div>

            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  value={branch}
                  onChange={handleChange}
                  type="text"
                  name="branch"
                  id="floating_sem"
                  className="block py-2.5 px-0 w-full text-[0.7rem] text-gray-50  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_sem"
                  className="peer-focus:font-medium absolute text-[0.7rem] text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Branch <span className="text-red-500 "> *</span>
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  value={year}
                  onChange={handleChange}
                  type="text"
                  name="year"
                  className="block py-2.5 px-0 w-full text-[0.7rem] text-gray-50  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_last_name"
                  className="peer-focus:font-medium absolute text-[0.7rem] text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Year <span className="text-red-500 "> *</span>
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  value={semester}
                  onChange={handleChange}
                  type="text"
                  name="semester"
                  className="block py-2.5 px-0 w-full text-[0.7rem] text-gray-50  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_phone"
                  className="peer-focus:font-medium absolute text-[0.7rem] text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Semester <span className="text-red-500 "> *</span>
                </label>
              </div>
              <div className="relative z-0 w-full mb-6 group">
                <input
                  value={section}
                  onChange={handleChange}
                  type="text"
                  name="section"
                  className="block py-2.5 px-0 w-full text-[0.7rem] text-gray-50  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                  placeholder=" "
                  required=""
                />
                <label
                  htmlFor="floating_company"
                  className="peer-focus:font-medium absolute text-[0.7rem] text-gray-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Section (Format: Branch-Number){" "}
                  <span className="text-red-500 "> *</span>
                </label>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={disable}
                className="disabled:bg-purple-400 disabled:cursor-not-allowed text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-[0.7rem] w-full [0.7rem]:w-auto px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </div>
            <p className="text-center text-[0.75rem] my-1 text-red-500">
              *All fields are required
            </p>
          </form>
        </>
      )}
    </>
  );
}

export default ClientData;
