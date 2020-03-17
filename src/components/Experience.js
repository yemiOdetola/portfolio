import React from 'react';
import { technologies } from '../constants/user';

export default function Experience() {
  return (
    <section className="experiences section-spacing">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <div className="section-header">Resume_</div>
            <p className="description">Some shitty intro to what the actual fuck I can get done in that firm and others...</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="resumes">
              <div className="title">Experiences</div>
              <div className="resume-block">
                <div className="block-title">Stack only</div>
                <div className="block-date">August 2019 - Present</div>
                <p className="block-highlight">Full stack developer</p>
              </div>
              <div className="resume-block">
                <div className="block-title">Stack only</div>
                <div className="block-date">August 2019 - Present</div>
                <p className="block-highlight">Full stack developer</p>
              </div>
              <div className="resume-block">
                <div className="block-title">Stack only</div>
                <div className="block-date">August 2019 - Present</div>
                <p className="block-highlight">Full stack developer</p>
              </div>
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
