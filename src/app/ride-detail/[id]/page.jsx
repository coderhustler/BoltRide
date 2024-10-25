"use client"
import Layout from '@/app/components/user/Layout/Layout'
import RideDetail from './RideDetail'
import { useRouter } from 'next/navigation'
import React,{useEffect} from 'react'

const page = (props) => {
  useEffect(()=>{
    console.log("props", props)
  },[])

  return (
    <div>
        <Layout Children={<RideDetail/>}></Layout>
    </div>
  )
}

export default page