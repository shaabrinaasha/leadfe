import React from 'react'

export default function wrapper({children}) {
  return (
    <div className="flex flex-col md:ml-60 h-screen p-5 ">
      {children}
    </div>
  )
}
