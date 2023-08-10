"use client";
import { getProviders } from "next-auth/react";
import { signIn } from "next-auth/react";
import React from "react";
import { FaGoogle } from "react-icons/fa";

function Login({providers}) {
  if (providers !== null && providers !== undefined) {
    return (
      <div className="flex justify-center">
        {Object.values(providers).map((item, i) => (
 
          <div key={item.id}>
            <button
              onClick={() => {
                signIn(item.id, {
                  callbackUrl:"http://localhost:3000/Filldata",
                });
              }}
              className="bg-blue-600 flex items-center  hover:bg-indigo-600 rounded-md  text-white p-2"
            >
              <FaGoogle className="mx-1" />
              sign in with {item.name}
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default Login;