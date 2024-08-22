'use client'
import React from 'react'

export default function provider(props) {
  // do what you need with data
  const {data, children} = props;

  return <GlobalContext>{children}</GlobalContext>
}
