import React from "react"
import { graphql } from "gatsby"
import Seo from "../../components/Seo"

const ProjectTemplate = ({ pageContext: { slug }, data }) => {
  return (
    <>
      <main className="project-template-page">
        <h2>{slug}</h2>
        <p>{data.microcmsProject.description}</p>
      </main>
    </>
  )
}

export const query = graphql`
  query getStringProject($slug: String) {
    microcmsProject(slug: { eq: $slug }) {
      description
      title
      image {
        url
      }
    }
  }
`

export default ProjectTemplate
