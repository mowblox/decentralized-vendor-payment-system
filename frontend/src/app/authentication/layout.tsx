'use client'
import Header from '@/components/shared/Header'
import React from 'react'

function Layout({children}:{children:React.ReactNode}) {
  return (
    <div>
        <Header darkMode={false} toggleDarkMode={() => {}} />
      <div>
        {children}
      </div>

      </div>
  )
}

export default Layout