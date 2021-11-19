import React from "react"
import { graphql } from "gatsby"
import AllProjects from "../components/AllProjects"
import Seo from "../components/Seo"

const ProjectsPage = ({
  data: {
    allMicrocmsProject: { nodes: projects },
  },
}) => {
  return (
    <>
      <main>
        <section className="project-page">
          <AllProjects title="all projects" showLink projects={projects}></AllProjects>
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  {
    allMicrocmsProject {
      nodes {
        description
        featured
        github
        pjid
        slug
        title
        url
        image {
          url
        }
      }
    }
  }
`

export default ProjectsPage
