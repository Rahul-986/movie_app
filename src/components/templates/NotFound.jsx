import React from 'react'
import notfound from "/error.gif"
const NotFound = () => {
  return (
    <div className=' w-screen flex items-center overflow-hidden'>
      <img width={1600}  src={notfound} />
    </div>
  )
}

export default NotFound
