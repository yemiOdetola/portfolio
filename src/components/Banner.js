import React from 'react';
import { profile } from '../constants/user';
// Banner-bg by Jared Brashier on Unsplash
export default function Banner() {
  // renderData = (data) => {
  //   return (
  //     <div className="each-data">
  //       <div className="name">location</div>
  //       <div className="value">{profile.location}</div>
  //     </div>
  //   )
  // }
  console.log(profile);
  return (
    <header className="banner">
      <div className="main-details">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={require(`../assets/images/${profile.image}`)} alt="" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="profile-details">
                <div className="intro">
                  <h2 className="name">{profile.name}</h2>
                  <div className="spec">{profile.spec}</div>
                </div>
                <div className="each-data">
                  <div className="name">email:</div>
                  <div className="value">{profile.email}</div>
                </div>
                <div className="each-data">
                  <div className="name">phone:</div>
                  <div className="value">{profile.phone}</div>
                </div>
                <div className="each-data">
                  <div className="name">location:</div>
                  <div className="value">{profile.location}</div>
                </div>
                <div className="socials">
                  <a href="https://linkedin.com/in/yemiodetola" target="_blank" rel="noopener noreferrer">
                    <img src={require('../assets/images/linkedin.svg')} alt="*" />
                  </a>
                  <a href="https://github.com/blarcmann" target="_blank" rel="noopener noreferrer">
                    <img src={require('../assets/images/github.svg')} alt="*" />
                  </a>
                  <a href="https://twitter.com/yemiotola" target="_blank" rel="noopener noreferrer">
                    <img src={require('../assets/images/twitter.svg')} alt="*" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
