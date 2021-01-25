import React from "react"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import SEO from "../components/seo"
import Person from "../components/person"
import Skills from "../components/skills"
import Work from "../components/work"
import Education from "../components/education"
import Hobbies from "../components/hobbies"
import 'bootstrap/dist/css/bootstrap.min.css'

const IndexPage = () => (
  <Layout>
    <Helmet>
      <link href='https://cdn.jsdelivr.net/devicons/1.8.0/css/devicons.min.css' rel='stylesheet'/>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.9.0/devicon.min.css"/>
      <script src="https://kit.fontawesome.com/51fc2db30d.js" crossOrigin="anonymous"></script>
    </Helmet>
    <SEO title="Curriculum Vitae"/>
    <Person/>
    <Skills/>
    <Work/>
    <Education/>
   <Hobbies/>
  </Layout>
)

export default IndexPage
