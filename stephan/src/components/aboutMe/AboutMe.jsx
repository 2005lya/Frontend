import './aboutMe.css'

export default function AboutMe() {
  return (
    <div className='about' id='about'>
        
        <h1 className='aboutTitle'>About Me</h1>
        <p className='intro'> 
        Brilliant and creative IT professional with deep knowledge and proficiency in JavaScript, HTML, CSS, and mobile responsive website development, experienced in building and maintaining complex web applications, especially by using React +, experimenting with new approaches and technologies, seeks the position of Front-end Web Developer.
          </p>
          <div className='aboutContainer'>
              <div className="aboutLeft">
                  <i className="aboutIcon fa-solid fa-7"></i>
                  <div>
                      <p>Years of</p>
                      <p>Experience</p>
                  </div>
                  
              </div>
              <div className="aboutRight">
                  <i className ="aboutIcon fa-solid fa-trophy"></i>
                  <div>
                      <p>Best Employee</p>
                      <p>of Year</p>
                  </div>
              </div>
          </div>
          <div className="aboutOffer">
                  <h1 className='offerTitle'>what I can Offer</h1>
                  <div className="service">
                      <div className="service1">
                          <i className="serviceIcon fa-solid fa-laptop-code"></i>
                          <h3 className='serviceTitle'>Web Development</h3>
                          <p className='serviceContent'>I build websites with responsive design and access standards in mind. Meaning that your website will look great on all devices. </p>
                      </div>
                      <div className="service2">
                          <i className="serviceIcon fa-brands fa-app-store-ios"></i>
                          <h3 className='serviceTitle'>Mobile App Development</h3>
                          <p className='serviceContent'>Powerful, scalable, stable, and beautiful Android
and iOS apps. From large apps to
small ones, I can help with your requirements.</p>
                      </div>
                      <div className="service3">
                          <i className="serviceIcon fa-brands fa-java"></i>
                          <h3 className='serviceTitle'>Backend Development</h3>
                          <p className='serviceContent'>Build and maintain websites, write high-quality code, perform quality assurance (QA) testing, troubleshoot and debug.</p>
                      </div>
                  </div>
          </div>
      
    </div>
  )
}
