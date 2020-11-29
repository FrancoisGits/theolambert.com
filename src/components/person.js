import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import * as Moment from "moment"
import {Twemoji} from "react-emoji-render"
import styles from "./person.module.css"
import Container from "react-bootstrap/Container"
import FigureImage from "react-bootstrap/FigureImage"

export default () => {
  const data = useStaticQuery(graphql`
      query {
          person {
              birthDate
              catchphrase
              email
              firstName
              intro
              lastName
              location
              phone
          }
      }
  `).person

  const age = Moment().diff(Moment(data.birthDate, 'YYYY-MM-DD'), 'years')

  return (
    <Container id="introduction" className={styles.person}>
      <div className={styles.person__header}>
        <FigureImage width={'200vmin'} style={{borderRadius:'50%'}}
               src='/face.png'/>
        <p className={styles.person__header__nameParagraph}>
        <span className={styles.person__header__name}>
          {data.firstName} {data.lastName}
        </span>
          {age}, crafting NASA spaceships from {data.location} <Twemoji text=':rocket:'/>
        </p>
      </div>

      <h2 className={styles.person__header__catchphrase}>
        {data.catchphrase}
      </h2>
      <p className={styles.person__header__intro}>{data.intro}</p>
    </Container>
  )
}