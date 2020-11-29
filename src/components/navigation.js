import React from 'react'
import {graphql, useStaticQuery} from "gatsby"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default () => {
  const data = useStaticQuery(graphql`
      query {
          allSocials(sort: {fields: name}) {
              edges {
                  node {
                      faLogo
                      link
                      name
                  }
              }
          }
      }
  `)

  const socials = data.allSocials.edges

  return (
    <Navbar collapseOnSelect bg="white" expand="lg" sticky="top">
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#introduction">introduction</Nav.Link>
          <Nav.Link href="#skills">skills</Nav.Link>
          <Nav.Link href="#work_experience">work experience</Nav.Link>
          <Nav.Link href="#education">education</Nav.Link>
          <Nav.Link href="#hobbies">hobbies</Nav.Link>
        </Nav>
        <Nav className="flex-row justify-content-around">
          {socials.map(({node}) => (
            <Nav.Link key={node.id} target="_blank" href={node.link}>
              <i className={node.faLogo}
                 style={{fontSize: '2.5em'}}/>
            </Nav.Link>
          ))
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
