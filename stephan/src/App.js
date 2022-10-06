import React, { Component } from 'react'

import TopBar from './components/topBar/TopBar'
import Header from './components/header/Header'
import Project from './components/projects/Project'
import AboutMe from './components/aboutMe/AboutMe'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Bottom from './components/bottom/Bottom'
import GoTop from './components/goTop/GoTop'
class App extends Component {
  

render(){
  return (
    <div className="App">
      <TopBar/>
      <Header/>
      <AboutMe/>
      <Project/>
      <Skills/>
      <Experience/>
      <Contact/>
      <Bottom/>
      <GoTop/>
    </div>
  )
}
}

export default App;
