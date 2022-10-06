import './bottom.css'

export default function Bottom() {
  return (
    <div className='bottom'>
      <p className='copyRight'>© Stephan Xi @2022</p>
      <p className='bottomMargin'>|</p>
      <p className='bottomMargin' onClick={() => window.location.href = 'http://www.linkedin.com/in/stephan-xi'}><i class="fa-brands fa-linkedin-in"></i></p>
      <p className='bottomMargin' onClick={() => window.location.href = 'https://github.com/2005lya'}><i class="fa-brands fa-github"></i></p>
      <p className='bottomMargin' onClick={() => window.location.href = 'https://www.facebook.com/profile.php?id=1452497499'}><i class="fa-brands fa-facebook-f"></i></p>
      <p className='bottomMargin' onClick={() => window.location.href = 'https://twitter.com/2005lyaa'}><i class="fa-brands fa-twitter"></i></p>
    </div>
  )
}
