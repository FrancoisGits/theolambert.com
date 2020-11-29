import React from "react";
import {graphql, useStaticQuery} from "gatsby";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck"
import Container from "react-bootstrap/Container";
import styles from "./hobbies.module.css"

export default () => {
  const data = useStaticQuery(graphql`
      query {
          allHobbies {
              edges {
                  node {
                      description
                      faLogo
                      id
                  }
              }
          }
      }
  `)

  const hobbies = data.allHobbies.edges

  return (
    <Container id="hobbies" className={styles.hobbies}>
      <h1 className={styles.hobbies__title}>Hobbies</h1>

      <CardDeck>
        {hobbies.map(({node}) => (
          <Card key={node.id} style={{minWidth: '18rem', maxWidth: '20rem', marginTop: '1em'}}>
            <Card.Body>
              <Card.Title className="text-center">
                <i className={node.faLogo}
                   style={{fontSize: '3em'}}/>
              </Card.Title>
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