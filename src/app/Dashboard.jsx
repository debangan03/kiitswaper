import React from 'react'

async function Dashboard({data}) {
  return (
    <div className='mt-20'>
        <h1 className='my-4 text-2xl font-bold text-center'>All options</h1>
        <hr className='w-[30%] border-2 border-blue-600 mx-auto mb-10'/>
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Roll No
          </th>
          <th scope="col" className="px-6 py-3">
            Section
          </th>
          <th scope="col" className="px-6 py-3">
            Phone
          </th>
          <th scope="col" className="px-6 py-3">
            Needed sec
          </th>
          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
       {data && Object.values(data).map((item,i)=><tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {item.name}
          </th>
          <td className="px-6 py-4">{item.roll}</td>
          <td className="px-6 py-4">{item.section}</td>
          <td className="px-6 py-4">{item.phone}</td>
          <td className="px-6 py-4">{item.section1} / {item.section2} / {item.section3} / {item.section4}</td>
          <td className="px-6 py-4">
            <a
              href="#"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Contact
            </a>
          </td>
        </tr>) }
      
      </tbody>
    </table>
  </div>
  </div>
  )
}

export default Dashboard