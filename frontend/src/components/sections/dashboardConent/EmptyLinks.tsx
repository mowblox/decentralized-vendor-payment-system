import UserInformation from '@/components/shared/UserInformation'
import Link from 'next/link'
import React from 'react'

function EmptyLinks() {
  return (
    <div>
      <div className='flex items-end justify-end dark:text-light'>
        <UserInformation/>
      </div>

      <div>
        <h1 className='font-nowy text-4xl capitalize mb-3 dark:text-light'>dashboard</h1>
        <p className='font-pop dark:text-light'>you have no links yet, <span className='dark:text-primary text-blue-400 underline'><Link href="/dashboard/createLink/">click here to create one instantly</Link></span></p>
      </div>
      </div>
  )
}

export default EmptyLinks