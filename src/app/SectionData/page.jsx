import UpdateData from './UpdateData'
import { getServerSession } from 'next-auth'


async function page() {
    const login=await getServerSession()
  return (
    <div>
      {/* <UpdateData login={login}/> */}
        <UpdateData login={login}/>
    </div>
  )
}

export default page