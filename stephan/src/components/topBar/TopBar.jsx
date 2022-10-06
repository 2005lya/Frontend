import './topBar.css'
import logo from '../../imgs/logo.png'

import React, { Component } from 'react'

export default class TopBar extends Component {
  constructor (props){
    super(props)
    this.state= (
      {
        tabNum:1
      }
    )

  }
  scrollToAnchor (anchorName, num)  {
    if(anchorName){
      let anchorElement = document.getElementById(anchorName);
      if(anchorElement) { anchorElement.scrollIntoView({block: 'start', behavior: 'smooth', inline: "nearest"});
      this.setState({tabNum:num}) }
    }
  }
  render (){
  return (
    <div className='top' id='top'>
        <div className="topLeft">
            <img className='topLeftLogo' src={logo} alt="" />
        </div>
        <div className="topCenter">
            <ul className='topList'>
                <li className={this.state.tabNum === 1 ? "chosen " : ""} onClick={() => this.scrollToAnchor('header',1)} >Home</li>
                <li className={this.state.tabNum === 2 ? "chosen " : ""} onClick={() => this.scrollToAnchor('about',2)}>About</li>
                <li className={this.state.tabNum === 3 ? "chosen " : ""} onClick={() => this.scrollToAnchor('projects', 3)}>Projects</li>
                <li className={this.state.tabNum === 4 ? "chosen " : ""} onClick={() => this.scrollToAnchor('skills', 4)}>Skills</li>
                <li className={this.state.tabNum === 5 ? "chosen " : ""} onClick={() => this.scrollToAnchor('experience', 5)}>Experience</li>
                <li className={this.state.tabNum === 6 ? "chosen " : ""} onClick={() => this.scrollToAnchor('contact', 6)}>Contact</li>
            </ul>
        </div>
        <div className="topRight">
          <a className='download' href='https://github.com/2005lya/2005lya/blob/main/CV-Stephan-10.pdf' download >
          <i className="topDownload fa-solid fa-download"></i>
          <p>Download CV</p>
          </a>
        </div>
      
    </div>
  )
  }
}
