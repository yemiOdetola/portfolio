import React from 'react';
import { reachme } from '../constants/user';

export default function Contact() {
  return (
    <section className="iwrite section-spacing">
      <div className="container">
        <div className="row">
          <div className="col-md-12" id="contact">
            <div className="section-header">Contact_</div>
            <div className="blogs">
              {reachme.map(reach => (
                <a className="blog" key={reach.image} href={reach.url} target="_blank" rel="noopener noreferrer">
                  <img src={require(`../assets/images/${reach.image}`)} alt={reach.image} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
