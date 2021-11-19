import React from "react"
import Title from "../components/Title"
import Seo from "../components/Seo"
import heroImg from "../assets/images/hero.svg"

const About = ( ) => {
  return (
    <>
      <Seo title="About" />
      <section className="about-page">
        <div className="section-center about-center">
          <img src={heroImg} alt="about me" className="about-img-svg" />
          <article className="about-text">
            <Title title= "about me"/>
            <p>test</p>
          </article>
        </div>
      </section>
    </>
  )
}

export default About
