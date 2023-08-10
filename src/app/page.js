import Image from 'next/image'
import Login from './auth/signin/Login'
import { getServerSession } from "next-auth";
import Try from './auth/signin/TRY';
import Dashboard from './Dashboard';

export default async function Home() {
  const login = await getServerSession();

  let dataSwap;
  if(login){
    dataSwap = await fetch('http://localhost:3000/api/getSwapDetails',{
      method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email:login.user.email}),
    }).then((res)=>res.json());
    
  }
  const data = await fetch('http://localhost:3000/api/getUsers')
  
  const res = await data.json()
  const data1=res.data
  if(!login){
  return (
    <Try/>
  )}

    return(
      <>
      <Dashboard data={data1} swap={dataSwap} login={login}/>
      </>
    )

}
