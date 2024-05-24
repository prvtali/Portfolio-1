import h1 from '../assets/images/h1.png'
import h2 from '../assets/images/h2.png'
import h3 from '../assets/images/h3.png'
import h4 from '../assets/images/h4.png'

const HeaderContent = () => {
  return (
    <div className='HeaderContent scroll'>
        <div className="HeaderContent__texts container3">
            <h2 className='HeaderContent__texts__h2'>Lorem ipsum dolor sit amet</h2>
            <p className='HeaderContent__texts__p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
        <a href=""><div className="HeaderContent__button container">
          <p className='HeaderContent__button__p'>Let’s begin</p>
        </div></a>
       <img className='HeaderContent__img1' src={h1} alt="" />
       <img className='HeaderContent__img2' src={h2} alt="" />
       <img className='HeaderContent__img3' src={h3} alt="" />
       <img className='HeaderContent__img4' src={h4} alt="" />
    </div>
  )
}

export default HeaderContent