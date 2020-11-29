import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import * as Moment from "moment"
import {Twemoji} from "react-emoji-render"
import styles from "./person.module.css"
import FigureImage from "react-bootstrap/FigureImage"

export default () => {
  const person = useStaticQuery(graphql`
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

  const age = Moment().diff(Moment(person.birthDate, 'YYYY-MM-DD'), 'years')

  return (
    <div id="introduction" className={styles.person}>
      <div className={styles.person__header}>
        <FigureImage className={styles.person__header__image}
                     src='/face.png'/>
        <p className={styles.person__header__nameParagraph}>
        <span className={styles.person__header__nameParagraph__name}>
          {person.firstName} {person.lastName}
        </span>
          <span className={styles.person__header__nameParagraph__location}>
          {age}, <span>crafting NASA spaceships from</span> {person.location} <Twemoji text=':rocket:'/>
          </span>
        </p>
      </div>

      <h2 className={styles.person__header__catchphrase}>
        {person.catchphrase}
      </h2>
      <p className={styles.person__header__intro}>{person.intro}</p>
    </div>
  )
}