import React from 'react';
import { profile } from '../constants/user';

export default function Hello() {
  return (
    <section className="container">
      <div className="row">
        <div className="col-md-10">
          <div className="hello section-spacing">
            <h2 className="section-header">Hi_</h2>
            <p className="description">{profile.hello}
              <span role="img" aria-label="grin"> &#128522;</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
