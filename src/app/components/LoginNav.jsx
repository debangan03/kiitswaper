"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsHandThumbsUp, BsHandThumbsDown } from "react-icons/bs";
import { CgMenuGridO, CgClose } from "react-icons/cg";
import { GoIssueClosed } from "react-icons/go";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { IoIosCloseCircleOutline } from "react-icons/io";

function LoginNav({ login, data }) {
  let msg_Array = [],
    i;
  if (data) {
    for (i in data.data) {
      if (data.data[i].status != true) {
        msg_Array.push(data.data[i]);
      }
    }
  }

  const [mobile, setmobile] = useState(false);
  const [notification, setnotification] = useState(false);
  const [profile, setprofile] = useState(false);
  const [acceptreq, setacceptreq] = useState(false);
  const [swapname, setswapname] = useState("");
  const [swapsection, setswapsection] = useState("");
  const [swaproll, setswaproll] = useState("");
  const [swapemail, setswapemail] = useState("");
  const [swapphone, setswapphone] = useState("");
  const [swapreciever, setswapreciever] = useState("");
  const [getsure, setgetsure] = useState(false);
  const [sure, setsure] = useState(false);
  const [view, setview] = useState(false);

  const accept = (item) => {
    setswapname(item.name);
    setswaproll(item.roll);
    setswapsection(item.section);
    setswapphone(item.phone);
    setswapemail(item.email);
    setswapreciever(item.reciever);
    setacceptreq(true);
  };

  const reject = async (email, reciever) => {
    toast.info("Initiating rejection", {
      position: "bottom-left",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    let res = await fetch(`/api/removemessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, reciever: reciever }),
    });
    let response = await res.json();
    if (response.success) {
      toast.success("Swap request rejected", {
        position: "bottom-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        window.location = "http://localhost:3000/";
      }, 500);
    }
  };

  const finalaccept = async (email, reciever) => {
    toast.info("preparing Swap process", {
      position: "bottom-left",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    let res = await fetch(`/api/updatemessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, reciever: reciever }),
    });
    let response = await res.json();
    if (response.success) {
      toast.success("swap success!!", {
        position: "bottom-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setTimeout(() => {
        window.location = "http://localhost:3000/SwapConfirm";
      }, 500);
    }
  };

  const [nomessage, setnomessage] = useState(true);

  useEffect(() => {
    if (msg_Array.length != 0) {
      setnomessage(false);
    }
  }, []);

  const logout = () => {
    toast.success("Logging you out!!", {
      position: "bottom-left",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setTimeout(() => {
      signOut({
        callbackUrl: process.env.VERCEL_URL || "http://localhost:3000",
      });
    }, 500);
  };
  const [ok, setok] = useState(true);

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

      {acceptreq && (
        <div className="w-screen h-screen bg-black/50 z-30 backdrop-blur-0 flex items-center justify-center fixed   top-0 left-0">
          <div className="relative p-4">
            <IoIosCloseCircleOutline
              onClick={() => setacceptreq(false)}
              className="absolute top-0 right-0 text-2xl text-purple-500 hover:text-red-500"
            />

            {ok && (
              <div className="bg-slate-700 w-[340px]  h-fit rounded-xl text-purple-300 p-4">
                <p className="text-center hidden lg:block text-purple-500 font-semibold mb-2">
                  You have a swap request from
                </p>
                <p className="text-justify">Name : {swapname}</p>
                <p className="text-justify">Section : {swapsection}</p>
                <p className="text-justify">Roll : {swaproll}</p>
                <p className="text-justify">Email : {swapemail}</p>
                <p className="text-justify">Phone : {swapphone}</p>
                {!getsure && (
                  <div className="flex items-center  justify-center space-x-10 mt-2">
                    <button
                      onClick={() => setgetsure(true)}
                      className="text-green-500  capitalize bg-black/20 rounded-md hover:text-green-400 px-3 py-1"
                    >
                      Swap
                    </button>
                    <button
                      onClick={() => reject(swapemail, swapreciever)}
                      className="text-red-600 capitalize bg-black/20 rounded-md hover:text-red-500 px-3 py-1"
                    >
                      reject
                    </button>
                  </div>
                )}
                {getsure && (
                  <div>
                    <div className="flex items-center mt-1">
                      <input
                        id="link-checkbox"
                        onChange={()=>setsure(!sure)}
                        type="checkbox"
                        defaultValue=""
                        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500"
                      />
                      <label
                        htmlFor="link-checkbox"
                        
                        className="ml-2 text-sm font-medium text-gray-300 "
                      >
                        I hereby declare that I want to swap section with {swapname}{" "}({swaproll})
                        
                      </label>
                    </div>
                    {sure && <div className="flex justify-center items-center mt-2">
                    <button
                      onClick={() => finalaccept(swapemail,swapreciever)}
                      className="text-green-500 mx-auto capitalize bg-black/20 rounded-md hover:text-green-400 px-3 py-1"
                    >Confirm swap
                      
                    </button>
                    </div>}
                  </div>
                )}

                {/* <SiNike className="text-green-600 text-3xl" />
              <RxCross2 className="text-red-500 text-3xl" /> */}
              </div>
            )}
          </div>
        </div>
      )}

      <nav className="bg-slate-950 shadow-xl shadow-slate-800 sticky top-0 py-2 z-30">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div
              className="absolute inset-y-0 left-0 flex items-center sm:hidden"
              onClick={() => {
                setmobile(!mobile);
                setnotification(false);
                setprofile(false);
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
            <div className="absolute space-x-4 inset-y-0 z-50 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                onClick={() => {
                  setnotification(!notification);
                  setprofile(false);
                }}
                type="button"
                className="hover:scale-95  relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>

              <div className="relative ml-3">
                <div>
                  <button
                    onClick={() => {
                      setnotification(false);
                      setprofile(!profile);
                    }}
                    type="button"
                    className="relative hover:scale-95 flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src={login.user.image}
                      alt="dp"
                    />
                  </button>
                </div>

                {profile && (
                  <div
                    onMouseLeave={() => {
                      setprofile(false);
                    }}
                    className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-slate-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex={-1}
                  >
                    <Link
                      href={"/Accounts"}
                      className="block px-4 py-2 text-sm cursor-pointer text-purple-500 hover:text-purple-300"
                      role="menuitem"
                      id="user-menu-item-0"
                    >
                      Your Profile
                    </Link>
                    <Link
                      href="#"
                      className="block px-4 py-2 text-sm cursor-pointer text-purple-500 hover:text-purple-300"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-1"
                    >
                      Swap History
                    </Link>
                    <span
                      className="block px-4 py-2 text-sm text-purple-500 hover:text-purple-300 cursor-pointer"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-2"
                      onClick={logout}
                    >
                      Sign out
                    </span>
                  </div>
                )}
                {notification && (
                  <div
                    onMouseLeave={() => setnotification(false)}
                    className="absolute right-10 z-50  mt-2 w-48 md:w-64 origin-top-right rounded-md bg-slate-900 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex={-1}
                  >
                    <div>
                      {msg_Array != undefined &&
                        msg_Array.map((item, i) => (
                          <div
                            key={i}
                            className=" px-2 hover:scale-105 text-purple-500 bg-slate-700 m-1 rounded flex items-center justify-between"
                          >
                            <p
                              className="px-2 text-[0.9rem] text-purple-500  bg-transparent m-1 rounded"
                              
                              key={i}
                            >
                              {item.message} from {item.name}
                            </p>
                            <span
                              className="text-purple-50 text-xl hover:text-teal-500"
                              
                              onClick={() =>{accept(item)}}
                            >
                              <AiOutlineEye />
                            </span>
                            {/* <div className="flex items-center justify-center space-x-4">
                              <div
                                onClick={() => accept(item)}
                                className="flex items-center justify-center space-x-1  hover:text-green-500 hover:scale-105 text-green-600 cursor-pointer"
                              >
                                <BsHandThumbsUp className="text-lg " />{" "}
                                <span className="t">Accept</span>{" "}
                              </div>
                              <div
                                onClick={() => reject(item)}
                                className=" flex items-center justify-center space-x-2 hover:text-red-400 hover:scale-105 text-red-500 cursor-pointer"
                              >
                                <BsHandThumbsDown className="text-lg" />{" "}
                                <span className="t">reject</span>
                              </div>
                            </div> */}
                          </div>
                        ))}
                      {nomessage && (
                        <div className="p-2 mx-1 text-purple-500  bg-slate-800 rounded">
                          <p className="text-[0.9rem] text-purple-500 rounded text-center">
                            No Messages Yet
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
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
    </>
  );
}

export default LoginNav;
