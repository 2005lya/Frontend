import './goTop.css'
import React, { PureComponent } from 'react'

export default class GoTop extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            isShow: 'none'
        }
    }
   

    componentDidMount(){
        
        window.addEventListener('scroll', () => {
            if(document.documentElement.scrollTop>500){
                this.setState({
                    isShow:''
                })
            } else {
                this.setState({
                    isShow:'none'
                })
            }
        })
    }
   
    render(){
        return (
            <div className="goTop" style={{display: this.state.isShow}} onClick={() => document.getElementById('header').scrollIntoView({block: 'start', behavior: 'smooth', inline: "nearest"})}><i class="fa-solid fa-angles-up"></i></div>
        )
    }
}