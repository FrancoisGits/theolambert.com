import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import * as Moment from "moment"
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
import Badge from "react-bootstrap/Badge"
import Tab from "react-bootstrap/Tab"
import styles from "./work.module.css"
import Nav from "react-bootstrap/Nav"

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
    <div id="work_experience" className={styles.work}>
      <h1 className={styles.work__title}>Work Experience</h1>

      <CardDeck className={styles.work__cardDeck} style={{justifyContent: 'center'}}>
        {jobs.map(({node}) => (
          <Card border="light" className={styles.work__cardDeck__card} key={node.id}>
            <Card.Header className={styles.work__cardDeck__card__header}>{formatDate(node.from)} to {formatDate(node.to)}</Card.Header>

            <Card.Body>
              <Card.Title>{node.job}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <span>{node.place && node.place + ', '}{node.city}</span>
              </Card.Subtitle>

              {node.involvedSkills &&
              <Tab.Container className={styles.work__cardDeck__card__tabs} defaultActiveKey="description">

                <Nav variant="pills" className={styles.work__cardDeck__card__tabs__nav}>
                  <Nav.Item className={styles.work__cardDeck__card__tabs__nav__item}>
                    <Nav.Link eventKey="description"
                              className={styles.work__cardDeck__card__tabs__nav__item__link}>description</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className={styles.work__cardDeck__card__tabs__nav__item}>
                    <Nav.Link eventKey="skills"
                              className={styles.work__cardDeck__card__tabs__nav__item__link}>skills</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey={"description"}>
                    <Card.Text>
                      {node.description}
                    </Card.Text>
                  </Tab.Pane>
                  <Tab.Pane eventKey={"skills"}>
                    <div>
                      {node.involvedSkills.sort().map((skill) => (
                        <Badge pill
                               variant={"dark"}
                               style={{margin: '0 0.3em'}}
                        >{skill}</Badge>
                      ))}
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
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
    </div>
  )
}