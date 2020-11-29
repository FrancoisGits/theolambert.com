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
    <Navbar collapseOnSelect expand="lg" bg="white" sticky="top">
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#introduction">introduction</Nav.Link>
          <Nav.Link href="#skills">skills</Nav.Link>
          <Nav.Link href="#work_experience">work experience</Nav.Link>
          <Nav.Link href="#education">education</Nav.Link>
          <Nav.Link href="#hobbies">hobbies</Nav.Link>
        </Nav>
        <Nav>
          {socials.map(({node}) => (
            <Nav.Link target="_blank" href={node.link}>
              <i key={node.id}
                 className={node.faLogo}
                 style={{fontSize: '2.5em'}}/>
            </Nav.Link>
          ))
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
