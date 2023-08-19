"use client";
import { getProviders } from "next-auth/react";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";


function Login({ providers }) {
  const [load, setload] = useState(false)

  if (providers !== null && providers !== undefined) {
    return (
      <div>
      <div className="flex justify-center">
        {Object.values(providers).map((item, i) => (
          <div key={item.id}>
            <button
              onClick={() => {
                signIn(item.id, {
                  callbackUrl: "http://localhost:3000/",
                });
                setload(true);
              }}
              className="bg-purple-600 flex items-center  hover:bg-purple-700 rounded-md  text-white p-2"
            >
              <FaGoogle className="mx-1" />
              sign in with {item.name}
            </button>
          </div>
        ))}

        
      </div>
      {load && (
          <div className="flex justify-center items-center mt-2 space-x-2">
            <div
              className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-purple-600 rounded-full"
              role="status"
              aria-label="loading"
            >
            
            </div>
            <span className="text-sm text-purple-400">Loading...</span>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
