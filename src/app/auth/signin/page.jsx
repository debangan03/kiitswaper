// import React from "react";
import { getProviders } from "next-auth/react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Login from "./Login";
import img from "../../Images/icons.png";

async function page() {
  const providers = await getProviders();
  console.log(providers);
  return (
    <div>
      <div>
        <Image
          className="rounded-full mx-auto p-10 md:w-56 md:h-60 my-auto w-44 h-48"
          src={img}
          height={400}
          width={400}
          alt="profile img"
        />
      </div>
      <Login providers={providers} />
    </div>
  );
}

export default page;