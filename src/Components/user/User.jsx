import React from 'react'
import { useParams } from 'react-router'
const User = () => {
    // const {adminID} = useParams()
    const {adminID} = useParams()
  return (
    <>
    
    <h1 className=' bg-slate-400 p-6 text-black'> user {adminID}</h1>
    
    </>
  )
}

export default User