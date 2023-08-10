import React from "react";
import { getServerSession } from "next-auth";

import LogoutNav from "./LogoutNav";
import LoginNav from "./LoginNav";

async function Navbar() {
  const login = await getServerSession();
  let response1;
  if(login){
  response1 = await fetch("http://localhost:3000/api/getmessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ reciever: login.user.email }),
  }).then((res)=>res.json());
}
  if (login) {
    return <LoginNav login={login} data={response1}/>
  } else {
    return <LogoutNav />
  }
}

export default Navbar;
