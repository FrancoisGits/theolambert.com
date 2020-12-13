import React from "react"
import Navigation from "./navigation"
import "./layout.css"

const Layout = ({children}) => {

  return (
    <div style={{
      margin: '0 auto',
      minWidth:'90%',
      background:'var(--neutral100)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Navigation />
      {children}
    </div>
  )
}

export default Layout