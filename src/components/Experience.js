import React from 'react';
import { technologies, experiences, profile } from '../constants/user';

export default function Experience() {
  return (
    <section className="experiences section-spacing">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <div className="section-header">Resume_</div>
            <p className="description">{profile.resume_desc}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="resumes">
              <div className="title">Experiences</div>
              {experiences.map(experience => (
                <div className="resume-block" key={experience.date}>
                  <div className="block-title">{experience.title}</div>
                  <div className="block-date">{experience.date}</div>
                  <p className="block-highlight">{experience.highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="title">Technologies</div>
            <div className="tech-group">
              {technologies.map(tech => (
                <img src={require(`../assets/images/${tech}`)} alt={tech} key={tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
