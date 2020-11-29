import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
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
    <div id="hobbies" className={styles.hobbies}>
      <h1 className={styles.hobbies__title}>Hobbies</h1>

      <CardDeck className={styles.hobbies__cardDeck}>
        {hobbies.map(({node}) => (
          <Card border="light" className={styles.hobbies__cardDeck__card} key={node.id}>
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
    </div>
  )
}