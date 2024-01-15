import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {Userid} = useParams()
  return (
    <div className='bg-gray-600 text-white h-20 text-2xl p-4'>
      user:{Userid}
    </div>
  )
}

export default User

// how to get dynamic data
