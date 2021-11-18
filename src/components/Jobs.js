import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allMicrocmsJob {
      nodes {
        position
        company
        date
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allMicrocmsJob: { nodes: jobs },
  } = data
  const [value, setValue] = React.useState(0)
  const {company,position,date,desc} = jobs[value]
  //const {id, name} = desc
  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((job, index)=>{
            return(
              <p key={index} className={index===value ? "job-btn active-btn" : "job-btn"} onClick={()=> setValue(index)}>
                {job.company}
              </p>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {desc.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
        </div>
        <Link to="/about" className="btn center-btn">
          more info
        </Link>
      </section>
  )
}

export default Jobs
