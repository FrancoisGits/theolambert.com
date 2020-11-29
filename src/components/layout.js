import React from "react"
import Navigation from "./navigation"
import "./layout.css"

const Layout = ({children}) => {

  return (
    <div style={{
      margin: '2vh auto',
      minWidth:'90%'
    }}>
      <Navigation />
      {children}
    </div>
  )
}

export default Layout