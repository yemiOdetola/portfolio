import React from 'react';
import { iwrite } from '../constants/user';

export default function Iwrite() {
  return (
    <section className="iwrite section-spacing">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header">I write_</div>
            <div className="blogs">
              {iwrite.map(blog => (
                <a className="blog" key={blog.image} href={blog.url} target="_blank" rel="noopener noreferrer">
                  <img src={require(`../assets/images/${blog.image}`)} alt={blog.image} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
