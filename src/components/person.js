import React, {useEffect} from "react"
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

  const age = Moment().diff(Moment(person.birthDate, 'YYYY-MM-DD'), 'years');

  const funnyPhrases = [
    " en train de coder une fusée à ",
    " en train de manger une pizza à ",
    " en train de gagner une partie de Tekken à ",
    " en train de dessiner un cowboy de l'espace à ",
    " en train de lire un livre (avec des mots !) à ",
    " en train de finir mes 10000 pompes quotidiennes à ",
    " en train de jouer un morceau de grunge à "
  ];

  const randInt = (min, max) => {
    const range = max - min;
    const rand = Math.floor(Math.random() * (range + 1));
    return min + rand;
  };

  const animate = () => {
    window.setInterval(() => {
        document.querySelector('#funny-phrase').innerText = funnyPhrases[randInt(0, funnyPhrases.length - 1)];
      },
      2500
    )
  };

  useEffect(animate);

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
          {age} ans,
            <span id="funny-phrase"> je vis à </span>
            {person.location} <Twemoji text=':rocket:'/>
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