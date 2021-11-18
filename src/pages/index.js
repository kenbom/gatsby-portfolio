import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import AllProjects from "../components/AllProjects"
import Seo from "../components/Seo"

const IndexPage = ({ data }) => {
  const {
    allMicrocmsProject: { nodes: projects },
  } = data
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Jobs />
        <AllProjects title="featured project" showLink projects={projects} />
      </main>
    </>
  )
}

export const query = graphql`
  {
    allMicrocmsProject(filter: { featured: { eq: true } }) {
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
export default IndexPage
