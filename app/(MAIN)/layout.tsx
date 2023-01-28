import React from "react"

import SideNav from "./side-nav"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex">
      <SideNav />
      <div className="flex-1">{children}</div>
    </section>
  )
}

export default MainLayout
