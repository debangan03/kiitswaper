"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";
import { GiCancel } from "react-icons/Gi";
import { SiGmail } from "react-icons/Si";
import { RiWhatsappFill } from "react-icons/ri";

function Dashboard({ data, swap, login }) {
  const user_array = [];
  let i, j;
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
  const [contactdetails, setcontactdetails] = useState({});

  const [details, setdetails] = useState(true);
  const [contact, setcontact] = useState(false);
  useEffect(() => {
    if (swap.success == "true") {
      setdetails(false);
    }
  }, []);

  let name;
  let section;

  const toglenoti = (e) => {
    setcontact(true);
    setcontactdetails(user_array[e]);
  };
  const sendnoti = async (email) => {
    const res = await fetch("/api/getname", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: login.user.email }),
    });
    const response = await res.json();

    name = response.user.name;
    section = response.user.section;
    const data = {
      name: name,
      email: login.user.email,
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
  };

  return (
    <>
      {contact && (
        <div className="w-screen h-screen bg-black/50 z-50 backdrop-blur-0 flex items-center justify-center absolute   top-0 left-0">
          <div className="text-black bg-white w-[40vw] py-5 px-4 h-80 rounded ">
            <div className="flex justify-between  ">
              <div className="">
                <h1 className="text-center text-xl font-bold ">
                  Contact your swap partner
                </h1>
                <hr className="w-[40%] mx-auto border-2 border-emerald-500 rounded my-2" />
                <div className="px-10 py-10">
                  <ul className="mt-5 font-semibold px-20 py-30">
                    <li className="my-2">Name : {contactdetails.name}</li>
                    <a href={`tel:${contactdetails.phone}`} target="_blank">
                      <li className="my-2">Phone : {contactdetails.phone}</li>
                    </a>
                    <a
                      href={`https://wa.me/${contactdetails.phone}/`}
                      target="_blank"
                    >
                      <li className="my-2">
                        Whats app : {contactdetails.phone}
                      </li>
                    </a>

                    <a href={`mailto:${contactdetails.email}`} target="_blank">
                      <li className="my-2">Email : {contactdetails.email}</li>
                    </a>
                  </ul>
                </div>
              </div>
              <GiCancel
                className="text-xl text-red-400 hover:text-red-600  cursor-pointer"
                onClick={() => setcontact(false)}
              />
            </div>
            <div className="flex justify-center space-x-9 items-center mb-10">
              <a href={`mailto:${contactdetails.email}`} target="_blank"><SiGmail className="text-red-500 text-xl hover:text-red-600" /></a>
              <a href={`https://wa.me/${contactdetails.phone}/`} target="_blank"><RiWhatsappFill className="text-green-500 text-xl hover:text-green-600" /></a>
            </div>
          </div>
        </div>
      )}

      {details && (
        <div
          id="marketing-banner"
          tabIndex={-1}
          className="fixed z-10 flex my-12 flex-col md:flex-row justify-between w-[calc(100%-2rem)] p-4 -translate-x-1/2 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl left-1/2 top-6 dark:bg-gray-700 dark:border-gray-600"
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
            ></button>
          </div>
        </div>
      )}

      <div className="mt-20">
        <h1 className="my-4 text-2xl font-bold text-center">All options</h1>
        <hr className="w-[30%] border-2 border-blue-600 mx-auto mb-10" />
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
              {user_array.map((item, i) => {
                return (
                  item.section1 !== "empty" && (
                    <tr
                      key={i}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.name}
                      </th>
                      <td className="px-6 py-4">{item.roll}</td>
                      <td className="px-6 py-4">{item.section}</td>
                      <td className="px-6 py-4">{item.phone}</td>
                      <td className="px-6 py-4">
                        {item.section1 !== "empty" && (
                          <span>{item.section1}</span>
                        )}
                        {item.section2 !== "empty" && (
                          <span>/ {item.section2}</span>
                        )}{" "}
                        {item.section3 !== "empty" && (
                          <span>/ {item.section3}</span>
                        )}{" "}
                        {item.section4 !== "empty" && (
                          <span>/ {item.section4}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 md:ml-3 flex items-center justify-center space-x-10">
                        <button
                          disabled={dis}
                          className="disabled:cursor-not-allowed font-medium text-blue-600 dark:text-blue-500 hover:text-blue-400"
                          onClick={() => toglenoti(i)}
                        >
                          Contact
                        </button>
                        <button
                          disabled={dis}
                          onClick={() => sendnoti(item.email)}
                          className=" disabled:cursor-not-allowed font-medium text-blue-600 dark:text-blue-500 hover:text-blue-400"
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
    </>
  );
}

export default Dashboard;
