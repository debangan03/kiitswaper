import Image from "next/image";
import Login from "./auth/signin/Login";
import { getServerSession } from "next-auth";
import Try from "./auth/signin/TRY";
import Dashboard from "./Dashboard";
import ClientData from "./Filldata/ClientData";

export default async function Home() {
  const login = await getServerSession();

  let dataSwap, data1;
  let response22;
  if (login) {
    const email = login.user.email;
    let res2 = await fetch(`http://localhost:3000/api/getFillConfirm`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });
    response22 = await res2.json();
    let ds = await fetch("http://localhost:3000/api/getSwapDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    });
    dataSwap = await ds.json();
    const data = await fetch("http://localhost:3000/api/getUsers");
    const res = await data.json();
    data1 = res.data;
  }

  if (!login) {
    return(<div className="mt-40"><Try /></div>);
  }
  if (response22.success) {
    return (
      <>
        <Dashboard data={data1} swap={dataSwap} login={login} />
      </>
    );
  } else {
    return <ClientData login={login} response={response22} />;
  }
}
