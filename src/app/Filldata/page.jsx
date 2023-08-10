import React from "react";
import ClientData from "./ClientData";
import { getServerSession } from "next-auth";

async function page() {
  const login = await getServerSession();
  let response;
  if (login) {
    let email = login.user.email;
    const d = { email: email };
    let res = await fetch(`http://localhost:3000/api/getFillConfirm`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(d),
    });
    response = await res.json();

    return (
      <div>
        <ClientData login={login} response={response} />
      </div>
    );
  }
}

export default page;
