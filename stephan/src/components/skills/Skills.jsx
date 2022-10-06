
import './skills.css'
import React, { Component } from 'react'
import 'intersection-observer'

export default class Skills extends Component {
    get frontendSkillList (){
        return [
            {
                name:'React',
                level:'90%',
            },
            {
                name:'VUE',
                level:'80%',
            },
            {
                name:'HTML',
                level:'90%',
            },
            {
                name:'CSS',
                level:'90%',
            },
            {
                name:'JS/TS',
                level:'85%',
            }
        ]
    }

    get backSkillList (){
        return [
            {
                name:'JAVA',
                level:'80%',
            },
            {
                name:'Python',
                level:'85%',
            },
            {
                name:'MySQL',
                level:'80%',
            },
            {
                name:'Git',
                level:'85%',
            },
            {
                name:'C++',
                level:'70%',
            }

        ]
    }

    // componentDidMount(){
    //     window.addEventListener('scroll', () => {
    //         if(scrollY > document.getElementById('skills').scrollY){
    //             document.getElementById('')
    //         }
    //     })
    // }

   

    
    createList (){
        return this.frontendSkillList.map ((item, index) => (
            <div className="skillsWrap" key={index}>
            <div className="react" >
              <div className="circle">
              <h1>{item.level}</h1>
              </div>
              <div className="right">
                  <div className={'frontRightCircle'+index + ' rightCircle'}></div>
              </div>
              <div className="left">  
                  <div className="leftCircle"></div>
              </div>
           </div>
           <div className='skillsName'>
           <h2>{item.name}</h2>
       </div>
       </div>
        ))
    }

    createList2(){
        return this.backSkillList.map ((item, index) => (
            <div className="skillsWrap" key={index}>
            <div className="react" >
              <div className="circle">
              <h1>{item.level}</h1>
              </div>
              <div className="right">
                  <div className={'backRightCircle'+index + ' rightCircle'}></div>
              </div>
              <div className="left">  
                  <div className="leftCircle"></div>
              </div>
           </div>
           <div className='skillsName'>
           <h2>{item.name}</h2>
       </div>
       </div>
        ))

    }
  render(){
     
     
      return (

        <div className='skills' id='skills'>
            <div className="skillsIcon">
            <i class="fa-brands fa-java"></i>
            <i class="fa-brands fa-python"></i>
            <i class="fa-brands fa-git"></i>
            <i class="fa-solid fa-database"></i>
            <i class="fa-solid fa-c"></i>
            </div>
          <p className='skillsTitle'>My Skills</p>
          <div className="skillsContainer">
          <div className="skillsContainerLeft">
              <h1>Frontend</h1>
              <h1>Development</h1>
          </div>
          <div className='skillsContainerRight'>
          {this.createList()}
          {/* {this.inview(document.getElementById('skills'), () => this.createList())} */}
          </div>
          </div>
          <div className="skillsContainer">
          <div className="skillsContainerLeft">
              <h1>Backend</h1>
              <h1>Development</h1>
          </div>
          <div className='skillsContainerRight'>
          {this.createList2()}
          </div>
          </div>
        </div>
       )
    }
    }
