import github from '../assets/images/github.png'
import linkedin from '../assets/images/linkedin.png'
import figma from '../assets/images/figma.png'

const Footer = () => {
  return (
    <footer className='Footer'>
        <div className="Footer__info">
            <h3>Call me:
123-456-789</h3>
            <h4>Email:
xxx@xyz.com</h4>
<div className="Footer__info__images">
  <img src={github} alt="" />
  <img src={linkedin} alt="" />
  <img src={figma} alt="" />
</div>

        </div>
    </footer>
  )
}

export default Footer