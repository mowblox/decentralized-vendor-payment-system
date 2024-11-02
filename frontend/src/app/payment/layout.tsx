'use client'
import Header from "@/components/shared/Header"


function Layout({children}:{children:React.ReactNode}) {
  return (
    <div className='flex flex-col '>
           <Header darkMode={false} toggleDarkMode={() => {}} />
        <div >{children}</div>

     </div>
  )
}

export default Layout