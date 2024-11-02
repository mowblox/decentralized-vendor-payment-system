'use client'
import Header from "@/components/shared/Header"

function Layout({children}:{children:React.ReactNode}) {
  return (
    <div>
       <div className="flex flex-col">
        <Header darkMode={false} toggleDarkMode={function (): void {
          throw new Error("Function not implemented.")
        } }/>
       </div>
       <div className="h-screen">{children}</div>
      </div>
  )
}

export default Layout