import Image from 'next/image'
import Login from './auth/signin/Login'
import { getServerSession } from "next-auth";
import Try from './auth/signin/TRY';
import Dashboard from './Dashboard';

export default async function Home() {
  const login = await getServerSession();
  const data = await fetch('http://localhost:3000/api/getUsers')
  const res = await data.json()
  const data1=res.data
  if(!login){
  return (
    <Try/>
  )}
  else{
    return(
      <>
      <Dashboard data={data1}/>
      </>
    )
  }
}
