import infoImg from '../assets/images/infoImg.png'
import line from '../assets/images/line.png'

const MainInfo = () => {
  return (
    <div className='MainInfo' id='about'>
        <h2 className='container3'>About me</h2>
        <div className="MainInfo__info"> 
        <img src={line} alt="" className="MainInfo__info__img" />
            <div className="MainInfo__info__texts">
                <h3>2024</h3>
                <img src={infoImg} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="MainInfo__info__texts">
                <h3>2024</h3>
                <img src={infoImg} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
           
            <div className="MainInfo__info__texts">
                <h3>2024</h3>
                <img src={infoImg} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="MainInfo__info__texts">
                <h3>2024</h3>
                <img src={infoImg} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
    </div>
  )
}

export default MainInfo