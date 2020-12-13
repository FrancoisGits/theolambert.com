import React from 'react'
import {graphql, useStaticQuery} from "gatsby"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import styles from './navigation.module.css'


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
    <Navbar collapseOnSelect className={styles.navigation} expand="lg" sticky="top">
      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className={styles.navigation__link} href="#introduction">introduction</Nav.Link>
          <Nav.Link className={styles.navigation__link} href="#skills">skills</Nav.Link>
          <Nav.Link className={styles.navigation__link} href="#work_experience">work experience</Nav.Link>
          <Nav.Link className={styles.navigation__link} href="#education">education</Nav.Link>
          <Nav.Link className={styles.navigation__link} href="#hobbies">hobbies</Nav.Link>
        </Nav>
        <Nav className="flex-row justify-content-around">
          {socials.map(({node}) => (
            <Nav.Link key={node.id} target="_blank" href={node.link}>
              <i className={[node.faLogo,styles.navigation__link__icon].join(' ')}/>
            </Nav.Link>
          ))
          }
          <Nav.Link key="download" download href={`LAMBERT-Theo_Resume_2020.pdf`}>
              <i className={["fas fa-file-download", styles.navigation__link__icon].join(' ')}/>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
