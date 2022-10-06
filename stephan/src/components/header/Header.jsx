import './header.css'
import Img from '../../imgs/Img.png'

export default function Header() {
  return (
    <div className='header' id='header'>
      <div className="headerLeft">
          <div className='headerLeftContent'>
              <p className='headerLeftHello'>Hello , I'm</p>
              <p className='headerLeftName'>Stephan Xi</p>
              <p className='headerLeftJob'>Software Developer</p>
          </div>
          <div className="headerLeftBtns"></div>
      </div>
      <div className="headerRight">
          <img className='profile' src={Img} alt="" />
      </div>
    </div>
  )
}
