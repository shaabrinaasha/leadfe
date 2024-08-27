import React from 'react'

export default function contentlayout({children}) {
  return (
    <div className="flex flex-col pt-2 px-4 space-y-2 bg-zinc-50 flex-grow  rounded-2xl overflow-y-auto ">
      {children}
    </div>
  )
}
