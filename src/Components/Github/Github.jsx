import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';


function Github() {
    const data = useLoaderData()

  // use basic useEffect hook fetch api

    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/sandhyarani2001')
    //     .then(Response=> Response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className=' text-center m-4 bg-gray-600
    text-white p-4 text-2xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git Picture" width={300} />
    </div>
  )
}

export default Github;

// fetch api react router dom
export const githubInfoLoader = async () =>{
    const Response =  await  fetch('https://api.github.com/users/sandhyarani2001')
    return Response.json()
}
// promise hai ye 