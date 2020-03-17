import React from 'react';
import Header from '../components/Header';
import Hello from '../components/Hello';
import Experience from '../components/Experience';
import Projects from '../components/Projects';

export default function Profile() {
  return (
    <>
      <Header />
      <Hello />
      <hr />
      <Experience />
      <Projects />
    </>
  )
}
