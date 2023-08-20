"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { LiaWhatsapp } from "react-icons/lia";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Dashboard({ data, swap, login }) {
  const user_array = [];
  let i, j,k;
  const [ursec, setursec] = useState("")
  const [ursec1, setursec1] = useState("")
  const [ursec2, setursec2] = useState("")
  const [ursec3, setursec3] = useState("")
  const [ursec4, setursec4] = useState("")
  const [urstatus, seturstatus] = useState(false)
  let dis = false;
  for (i in data) {
    if (data[i].email != login.user.email) {
      user_array.push(data[i]);
    }
  }
  for (j in data) {
    if (data[j].email == login.user.email && data[j].section1 == "empty") {
      dis = true;
    }
  }
  const secdetail=()=>{
  for (k in data) {
    if (data[k].email == login.user.email) {
      setursec(data[k].section)
      setursec1(data[k].section1)
      setursec2(data[k].section2)
      setursec3(data[k].section3)
      setursec4(data[k].section4)
      seturstatus(data[k].swapstatus)
    }
  }
  }
  const [contactdetails, setcontactdetails] = useState({});

  const [details, setdetails] = useState(false);
  const [contact, setcontact] = useState(false);
  const [category, setcategory] = useState("");
  const [search, setsearch] = useState("");

  useEffect(() => {
    if (swap.success != "true") {
      setdetails(true);
    }
    secdetail();
  }, []);

  let name;
  let section;

  const toglenoti = (e) => {
    setcontact(true);
    setcontactdetails(user_array[e]);
  };
  const sendnoti = async (email) => {
    const singlemsgchk = await fetch("/api/checkmessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, reciever: login.user.email }),
    });
    const singlemsg = await singlemsgchk.json();
    console.log("Msg check : ", singlemsg)
    if (singlemsg.success) {
      toast.info(
        "You have already sent a request or you have a pending request from this person.",
        {
          position: "top-center",
          autoClose: 5500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    } else {
      const allow = await fetch("/api/getname", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });
      const allowswap = await allow.json();
      const res = await fetch("/api/getname", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: login.user.email }),
      });
      const response = await res.json();
      if (
        (allowswap.user.section1 == response.user.section ||
          allowswap.user.section2 == response.user.section ||
          allowswap.user.section3 == response.user.section ||
          allowswap.user.section4 == response.user.section) &&
        (response.user.section1 == allowswap.user.section ||
          response.user.section2 == allowswap.user.section ||
          response.user.section3 == allowswap.user.section ||
          response.user.section4 == allowswap.user.section)
      ) {
        toast.success("sending swap req!!", {
          position: "bottom-left",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        name = response.user.name;
        section = response.user.section;
        const data = {
          name: name,
          roll: response.user.roll,
          email: login.user.email,
          phone: response.user.phone,
          section: section,
          reciever: email,
          message: "hi ! you have one swap request",
        };
        const res1 = await fetch("/api/addmessages", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const response1 = await res1.json();
      } else {
        toast.warn(
          "You are not allowed to send swap request due to mismatch of section!!",
          {
            position: "top-center",
            autoClose: 5500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }
        );
      }
    }
  };

  return (
    <div>
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
        theme="dark"
      />
      {contact && (
        <div className="w-screen h-screen bg-black/50 z-30 backdrop-blur-0 flex items-center justify-center fixed   top-0 left-0">
          <div className="relative p-4">
            <IoIosCloseCircleOutline
              onClick={() => setcontact(false)}
              className="absolute top-0 right-0 text-2xl text-purple-500 hover:text-red-500"
            />

            {contactdetails && (
              <div className="bg-slate-700 w-[340px]  h-fit rounded-xl text-purple-300 p-4">
                <p className="text-center hidden lg:block text-purple-500 font-semibold mb-2">
                  You have a swap request from
                </p>
                <p className="text-justify">Name : {contactdetails.name}</p>
                <p className="text-justify">
                  Section : {contactdetails.section}
                </p>
                <p className="text-justify">Roll : {contactdetails.roll}</p>
                <p className="text-justify">Email : {contactdetails.email}</p>
                <p className="text-justify">Phone : {contactdetails.phone}</p>
                <div className="flex items-center justify-center space-x-10 mt-2">
                  <LiaWhatsapp className="text-2xl text-green-500" />
                  <HiOutlineMail className="text-2xl text-red-500 " />

                  {/* <SiNike className="text-green-600 text-3xl" />
              <RxCross2 className="text-red-500 text-3xl" /> */}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {details && (
        <div
          id="marketing-banner"
          tabIndex={-1}
          className="fixed mt-20 z-10 flex my-12 flex-col md:flex-row justify-between w-[calc(100%-2rem)] p-2 -translate-x-1/2 bg-slate-800 shadow-inner shadow-slate-950  rounded-lg lg:max-w-7xl left-1/2 top-10"
        >
          <p className="flex items-center text-sm font-normal test-[0.8rem] text-center text-gray-100">
            To opt for section swap , you have to fill your details first
          </p>

          <div className="flex items-center flex-shrink-0">
            <Link
              href="/SectionData"
              className="px-5 py-2 md:mr-2 mx-auto mt-[2px] md:text-sm text-xs  font-medium text-white bg-purple-700 rounded-lg hover:bg-purple-800 "
            >
              Fill Swap Details
            </Link>
          </div>
        </div>
      )}

        {!details &&
        <div
        id="marketing-banner"
        tabIndex={-1}
        className="fixed mt-20 z-10 flex my-12 flex-col md:flex-row md:px-10 px-4 justify-between w-[calc(100%-2rem)] p-2 -translate-x-1/2 bg-slate-800 shadow-inner shadow-slate-950  rounded-lg lg:max-w-7xl left-1/2 top-10"
      >
        {urstatus && <p className="flex items-center text-sm font-normal test-[0.8rem] text-center text-purple-100">
          Congratulations!!!!  You have successfully swapped your section. Have a good sem ahead.
        </p>}
        <p className="flex capitalize items-center text-sm font-normal test-[0.8rem] text-center text-purple-100">
          Your current section : {ursec} 
        </p>
        
       {!urstatus && <p className="flex capitalize items-center text-sm font-normal test-[0.8rem] text-center text-gray-100">
          Your section preferences : {ursec1!="EMPTY"&&ursec1}  {ursec2!="EMPTY"&&`/ ${ursec2}`}  {ursec3!="EMPTY"&&`/ ${ursec3}`}  {ursec4!="EMPTY"&&`/ ${ursec4}`}
        </p>}

        
      </div>}

      <div className="h-10 md:h-3" />

      <div className="mt-10 mx-4">
        <form>
          <div className={`flex mt-24 mb-10 md:px-64 mx-2 `}>
            <label
              htmlFor="search-dropdown"
              className="mb-2 text-sm font-medium  sr-only "
            >
              Your Email
            </label>
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              className="flex-shrink-0 z-10 inline-flex items-center md:text-sm text-[0.65rem] font-medium text-center  rounded-lg "
              type="button"
            >
              <select
                value={category}
                onChange={(e) => {
                  setcategory(e.target.value);
                }}
                id="countries_disabled"
                className="block p-2.5 w-full z-20 text-sm text-gray-100 bg-gray-800 rounded-l-lg  
                focus:outline-none  "
              >
                <option>Select category</option>
                <option>roll</option>
                <option>name</option>
                <option>semester</option>
                <option>section</option>
              </select>
            </button>

            <div className="relative w-full">
              <input
                value={search}
                onChange={(e) => {
                  setsearch(e.target.value);
                }}
                type="search"
                id="search-dropdown"
                className="block p-2.5 w-full z-20 text-[0.75rem] text-gray-100 bg-gray-800 rounded-r-lg 
                focus:outline-none "
                placeholder="Search Mockups, Logos, Design Templates..."
              />
            </div>
          </div>
        </form>

        <h1 className="my-4 text-center text-2xl font-bold text-cente capitalize text-purple-200">
          All options
        </h1>
        <hr className="w-[30%] border-2 border-purple-500 mx-auto px-10 mb-10" />
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-100 uppercase bg-purple-700 ">
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
              {Object.values(user_array)
                .filter((item) => {
                  return search == "" ||
                    category == "" ||
                    category == "Select option"
                    ? item
                    : category == "section"
                    ? item.section.includes(search.toUpperCase()) ||
                      item.section1.includes(search.toUpperCase()) ||
                      item.section2.includes(search.toUpperCase()) ||
                      item.section3.includes(search.toUpperCase()) ||
                      item.section4.includes(search.toUpperCase())
                    : item[category]
                        .toUpperCase()
                        .includes(search.toUpperCase());
                })
                .map((item, i) => {
                  return (
                    item.section1 !== ("EMPTY" || "empty") && (
                      <tr
                        key={item._id}
                        className="bg-slate-800 border-b-[1px] rounded-b-sm border-purple-400"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-50 whitespace-nowrap "
                        >
                          {item.name}
                        </th>
                        <td className="px-6 py-4 text-gray-50 ">{item.roll}</td>
                        <td className="px-6 py-4 text-gray-50 ">
                          {item.section}
                        </td>
                        <td className="px-6 py-4 text-gray-50 ">
                          {item.phone}
                        </td>
                        <td className="px-6 py-4 text-gray-50 ">
                          {item.section1 !== "EMPTY" && (
                            <span>{item.section1}</span>
                          )}
                          {item.section2 !== "EMPTY" && (
                            <span>/ {item.section2}</span>
                          )}{" "}
                          {item.section3 !== "EMPTY" && (
                            <span>/ {item.section3}</span>
                          )}{" "}
                          {item.section4 !== "EMPTY" && (
                            <span>/ {item.section4}</span>
                          )}
                        </td>
                        <td className="px-6 py-4 md:ml-3 flex items-center justify-center space-x-10">
                          <button
                            disabled={dis}
                            className="disabled:cursor-not-allowed font-medium text-purple-600 dark:text-purple-500 hover:text-purple-400"
                            onClick={() => toglenoti(i)}
                          >
                            Contact
                          </button>
                          <button
                            disabled={dis}
                            onClick={() => sendnoti(item.email)}
                            className=" disabled:cursor-not-allowed font-medium text-purple-600 dark:text-purple-500 hover:text-purple-400"
                          >
                            Send swap request
                          </button>
                        </td>
                      </tr>
                    )
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
