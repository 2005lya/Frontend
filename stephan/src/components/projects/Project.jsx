import './project.css'
import React, { Component} from 'react'
import img1 from '../../imgs/01.png'
import img2 from '../../imgs/02.png'
import img3 from '../../imgs/03.jpeg'
import img4 from '../../imgs/04.png'
import img5 from '../../imgs/05.jpeg'



export default class Project extends Component{
    constructor(props){
        super(props)
        this.state= {
            num : 0,
            img: [img1, img2, img3, img4, img5, img1],
            title:[
                'News Mobile App Built with React Native', 
                'BootStrap Website Built with React',
                'E-Commerce Page Built with Vue.js', 
                'Blog Website Built with React',
                'QR code detection Project with Python', 
                'Naive Bayes Abstract Classification Project', 
                
                ],
                url:[
                    'https://github.com/2005lya/learngit/tree/master/AwesomeProject',
                    'https://github.com/2005lya/learngit/tree/master/BootStrapWeb',
                    'https://github.com/2005lya/learngit/tree/master/MR',
                    'https://github.com/2005lya/learngit/tree/master/myblog',
                    'https://github.com/2005lya/Python/tree/main/Covid19QRCode',
                    'https://github.com/2005lya/learngit/tree/master/AwesomeProject'

                ],
            content:[
                'News App for Android that has top headlines, content and comments modules.',
                'Single-page application with top bar navigation to show different content pages',
                'Product details section with cart functionality to store a customer\'s selections.',
                'Single-page application with top bar navigation to show different content pages',
                'Performed QR code detection in an image using image processing techniques.',
                'News App for Android that has top headlines, content and comments modules.'
            ],
            isDisplay: ''
        }  
    }
    slide (step){
        let num = this.state.num
        if(num >= 2){
            num = -1
        }
        this.setState({num : num+step})
    }
    clear (){
        clearInterval(this.timebar)
    }
    show (e){
        this.clear()
        // this.setState({
        //     isDisplay: ''
        // })
    }
    go (){
        // this.setState({
        //     isDisplay: 'none'
        // })
        this.timebar = setInterval(
            () => this.slide(1),
        3000);
    }
    componentDidMount(){
        this.go()
    }
    createList(){
        let { title, isDisplay, content, url } = this.state
        return this.state.img.map((item, index) => (
            <div className="frame" key={index}>
                
                <img src={item} alt=""   onMouseOver={ (e) => this.show(e)}/>
               
            <div className="bottom" style={{display: isDisplay}}>
                <div className="bottomLeft">
                    <h2 className='bottomTitle'>{title[index]}</h2>
                    <p className='bottomContent'>{content[index]}</p>
                </div>
                <div className="bottomRight">
                    {/* <i className="bottomIcon fa-solid fa-square-arrow-up-right"></i> */}
                    <a href={url[index]}><i className="bottomIcon fa-solid fa-square-arrow-up-right"></i></a>
                </div>
            </div>
            </div>
        ))
    }
    render(){
       let { num} = this.state
       return (
        <div className='project' id='projects'>
            <div className='projectIcon'>
                <i class="fa-brands fa-react"></i>
                <i class="fa-brands fa-vuejs"></i>
                <i class="fa-brands fa-node-js"></i>
                <i class="fa-brands fa-js"></i>
                <i class="fa-brands fa-html5"></i>
            </div>
          <p className='title'>Recent Projects</p>
          <div className="projectList">
            <div className="container" 
                onMouseLeave={() => this.go()}
                style={{ left: -num*25 +'%' }}>
                {this.createList()} 
            </div>
          </div>
        </div>
      )
    }
}
