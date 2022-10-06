import './experience.css'
import React, { Component } from 'react'

export default class Experience extends Component {
    get expList (){
        return [
            {
                date: '11/2021 - 12/2021',
                icon: 'fa-solid fa-briefcase',
                title: ' Product Analyst (internship)',
                company: 'Vodafone Foundation Aotearoa, Auckland',
                content: '• Utilised web crawler tools to extract 1000 user reviews from websites to analyse feedback. <br>• Conducted competitive analysis of network products in the market with a detailed report.<br/>• Coordinated with a team of 4 members with skills in report structure and design.<br/>• Obtained fabulous teamwork experience of reaching our target in a tight timeframe.'
            }, 
            {
                date: '07/2020 - 07/2021',
                icon:'fa-solid fa-graduation-cap',
                title: ' Graduate Diploma in Computer Science',
                company: 'University of Auckland, Auckland',
                content: '• Algorithm, Java, Database, Machine Learning, Computer Graphics, Data Communication,Assembly Language, Mathematic foundation of CS.'
            }, 
            {
                date: '10/2012 - 04/2019',
                icon: 'fa-solid fa-briefcase',
                title: ' Supervisor (Senior Editor)',
                company: 'zol.com.cn (The largest IT business website in Greater China)',
                content: '• Conducted 50+ website design briefs and liaised with the developer team to ensure timely delivery of them.<br/>• Managed content of Mobile Phone Channel which occupied 60% of page views of ZOL.<br/>• Supervise a team of 8+ junior editors to ascertain the completion of product reviews.<br/>• Provide training of 80+ junior editors in media coverage.<br/>• Awarded the Best Employee of The Year & Quarter.<br/>• Awarded the title of Senior Editor.'
            },
            {
                date: '07/2008 - 07/2012',
                icon: 'fa-solid fa-graduation-cap',
                title: ' Bachelor of Civil Engineering',
                company: 'Beijing Jiaotong University Haibin College, China',
                content: ''
            }
        ]
    }
    createList (){
        return this.expList.map((item, index) => (
            <div className="expContainer" key={index}>
            <div className="expContainerLeft">
                <div className="expIcon">
                <i className={item.icon}></i>
                </div>
                {/* <div className="expLine"></div> */}
            </div>
            <div className="expContainerRight">                
                <p className='expDate'>{item.date}</p>
                <h1 className='expAddress'>{item.title}</h1>
                <h5 className='expCity'>{item.company}</h5>
                {/* <div className='expContent'>{item.content}</div> */}
                <p className='expContent' dangerouslySetInnerHTML={{__html: item.content}}></p>
            </div>
        </div>
    )
        )
    }
    render(){
  return (
  
    <div className='experience' id='experience'>

        <div className="experienceTitle">
            <p className='expTiitle'>My Experience</p>
        </div>
        {this.createList()}
       
      
    </div>
  )}
}
