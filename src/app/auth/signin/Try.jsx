// import React from "react";
import { getProviders } from "next-auth/react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Login from "./Login";
import img from "../../Images/icons.png";

async function Try() {
 
  const providers = await getProviders();

  return (
    <div className="flex flex-col">
      <div>
        <Image
          className="rounded-full mx-auto p-10 md:w-56 md:h-60 my-auto w-52 h-48"
          src={img}
          height={300}
          width={500}
          alt="profile img"
        />
      </div>
      <Login providers={providers} />
      
    </div>
  );
}

export default Try;
