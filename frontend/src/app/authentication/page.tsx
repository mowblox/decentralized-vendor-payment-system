'use client'
import AuthForm from '@/components/shared/authenticationContent/AuthForm'
import React from 'react'

function page() {
  return (
    <div className='flex justify-center mt-10'>
      <AuthForm isLogin={false}/>
    </div>
  )
}

export default page