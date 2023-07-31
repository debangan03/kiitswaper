import React from 'react'
import ClientData from './ClientData'
import { getServerSession } from 'next-auth'

async function page() {
    const login=await getServerSession()
  return (
    <div>
        <ClientData login={login}/>

    </div>
  )
}

export default page