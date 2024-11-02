import SideNav from "@/components/shared/SideNav"



function Layout({children}:{children:React.ReactNode}) {
  return (
    <div className='flex h-screen flex-col md:flex-row'>

        <div className='w-full flex-none md:w-64'>
          <SideNav/>
        </div>

        <div className=' md:dark:bg-dark border flex-grow p-6 md:p-5'>{children}</div>

     </div>
  )
}

export default Layout