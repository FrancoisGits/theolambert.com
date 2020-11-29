import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
import Container from "react-bootstrap/Container"
import styles from "./education.module.css"

export default () => {
  const data = useStaticQuery(graphql`
      query {
          allEducation(sort: {fields: to, order: DESC}) {
              edges {
                  node {
                      city
                      description
                      from
                      name
                      place
                      to
                  }
              }
          }
      }
  `)

  const edu = data.allEducation.edges

  return (
    <Container id="education" className={styles.edu}>
      <h1 className={styles.edu__title}>Education</h1>

      <CardDeck>
        {edu.map(({node}) => (
          <Card key={node.id} style={{minWidth: '18rem', maxWidth: '20rem', marginTop: '1em'}}>
            <Card.Header>{node.from && node.from + ' to '} {node.to}</Card.Header>

            <Card.Body>
              <Card.Title>{node.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <span>{node.place && node.place + ', '}{node.city}</span>
              </Card.Subtitle>

              <Card.Text>
                {node.description}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    </Container>
  )
}
