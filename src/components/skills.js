import React from "react"
import {graphql, useStaticQuery} from "gatsby"
import Tooltip from "react-bootstrap/Tooltip"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import styles from "./skills.module.css"

export default () => {
  const data = useStaticQuery(graphql`
      query {
          allSkills(sort: {fields: name}) {
              edges {
                  node {
                      devicon
                      faLogo
                      level
                      name
                      type
                  }
              }
          }
      }
  `)

  const skills = data.allSkills.edges

  const technicalSkills = skills.filter(skills => skills.node.type === 'Technical')
  const languageSkills = skills.filter(skills => skills.node.type === 'Language')
  const miscSkills = skills.filter(skills => skills.node.type === 'Misc')

  return (
    <div id="skills" className={styles.skills}>
      <h1 className={styles.skills__title}>Main Skills</h1>

      <div className={styles.skills__technical}>
        <h3 className={styles.skills__technical__title}>Technical</h3>
        <div className={styles.skills__technical__list}>
          {technicalSkills.map(({node}) => (
            <OverlayTrigger placement='top' delay={{show: 50, hide: 300}}
                            overlay={<Tooltip id={node.id + 'tooltip'}>{node.name}</Tooltip>}>
              <div className={styles.skills__technical__list__item}>
                <i key={node.id}
                   className={node.devicon ? node.devicon : node.faLogo}
                   style={{fontSize: '4em'}}/>
              </div>
            </OverlayTrigger>
          ))}
        </div>
      </div>

      <div className={styles.skills__language}>
        <h3 className={styles.skills__language__title}>Language</h3>
        <div className={styles.skills__language__list}>
          {languageSkills.map(({node}) => (
            <div className={styles.skills__language__list__item}>
              <i key={node.id}
                 className={node.devicon ? node.devicon : node.faLogo}
                 style={{fontSize: '1.2em'}}/>
              <span className={styles.skills__language__list__item__name}>{node.name}</span>
              <span className={styles.skills__language__list__item__level}>{node.level}</span>
            </div>
          ))
          }
        </div>
      </div>

      <div className={styles.skills__misc}>
        <h3 className={styles.skills__misc__title}>Miscellaneous</h3>
        <div className={styles.skills__misc__list}>
          {miscSkills.map(({node}) => (
            <OverlayTrigger placement='top' delay={{show: 50, hide: 300}}
                            overlay={<Tooltip id={node.id + 'tooltip'}>{node.name}</Tooltip>}>
              <div className={styles.skills__misc__list__item}>
                <i key={node.id}
                   className={node.devicon ? node.devicon : node.faLogo}
                   style={{fontSize: '3em'}}/>
              </div>
            </OverlayTrigger>
          ))
          }
        </div>
      </div>

    </div>
  )
}