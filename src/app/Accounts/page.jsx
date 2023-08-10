import React from "react";
import Accountdata from "./Accountdata";
import { getServerSession } from "next-auth";

async function page() {
  const login = await getServerSession();
  let response
  if(login){
    let email = login.user.email;
      const d = { email: email };
      let res = await fetch(`http://localhost:3000/api/getname`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(d),
      });
      response = await res.json();
    
    }
  return (
    <>
      <Accountdata login={login} data={response} />
    </>
  );
}

export default page;
