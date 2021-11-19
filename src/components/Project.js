import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"

const Project = ({
  description,
  title,
  github,
  url,
  slug,
  index,
  pjid,
  image,
}) => {
  return (
    <article className="project">
      <img src={image.url} className="project-img" alt={title}></img>
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <Link to={`/projects/${slug}`} className="project-slug">
          <h3>{slug}</h3>
        </Link>
        <p className="project-desc">{description}</p>
      </div>
    </article>
  )
}

export default Project
