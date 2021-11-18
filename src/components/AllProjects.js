import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"

const AllProjects = ({ title, showLink, projects }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center project-center">
        {projects.map((project, index) => {
          return (
            <Project key={project.pjid} index={index} {...project}></Project>
          )
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  )
}

export default AllProjects
