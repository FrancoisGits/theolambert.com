import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import * as Moment from "moment"
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
import Badge from "react-bootstrap/Badge"
import Container from "react-bootstrap/Container"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import styles from "./work.module.css"

export default () => {
  const data = useStaticQuery(graphql`
      query {
          allWorkExperience(sort: {fields: to, order: DESC}) {
              edges {
                  node {
                      city
                      description
                      from
                      id
                      job
                      involvedSkills
                      place
                      to
                  }
              }
          }
      }
  `)

  const jobs = data.allWorkExperience.edges

  const formatDate = (date) => {
    return Moment(date, "YYYY-MM").format('MMM YYYY')
  }

  return (
    <Container id="work_experience" className={styles.work}>
      <h1 className={styles.work__title}>Work Experience</h1>

      <CardDeck>
        {jobs.map(({node}) => (
          <Card key={node.id} style={{minWidth: '18rem', maxWidth: '20rem', marginTop: '1em'}}>
            <Card.Header>{formatDate(node.from)} to {formatDate(node.to)}</Card.Header>

            <Card.Body>
              <Card.Title>{node.job}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <span>{node.place && node.place + ', '}{node.city}</span>
              </Card.Subtitle>

              {node.involvedSkills &&
              <Tabs defaultActiveKey="description" id="uncontrolled-tab-example">
                <Tab style={{margin: '1em 0'}} eventKey="description" title="description">
                  <Card.Text>
                    {node.description}
                  </Card.Text>
                </Tab>
                {node.involvedSkills &&
                <Tab style={{margin: '1em 0'}} eventKey="skills" title="skills">
                  <div>
                    {node.involvedSkills.sort().map((skill) => (
                      <Badge pill
                             variant={"dark"}
                             style={{margin: '0 0.3em'}}
                      >{skill}</Badge>
                    ))}
                  </div>
                </Tab>
                }
              </Tabs>
              }

              {!node.involvedSkills &&
              <Card.Text>
                {node.description}
              </Card.Text>
              }
            </Card.Body>
          </Card>
        ))}
      </CardDeck>
    </Container>
  )
}