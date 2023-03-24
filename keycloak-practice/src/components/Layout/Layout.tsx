import React from 'react'

interface LayoutProps{
    title?:string,
    children?:any
}

const Layout:React.FC<LayoutProps> = ({children,title}) => {
  return (
   <>
   <main>
    {children}
   </main>
   </>
  )
}

export default Layout