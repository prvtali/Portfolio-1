import m1 from '../assets/images/m1.png'

import mglav from '../assets/images/mglav.png'
import mglav2 from '../assets/images/mglav2.png'
import mglav3 from '../assets/images/mglav3.png'
import mglav4 from '../assets/images/mglav4.png'

const MainCards = () => {
  return (
    <div className='MainCards' id='projects'>
        <h2 className='MainCards__h2 container3'>Projects</h2>

        <div className="MainCards__info">
           <div className="MainCards__info__wrap">
        <div className="MainCards__info__wrap__card1 bg">
          <img src={m1} alt="" />

          <img className='mimages' src={mglav} alt="" />

          <h2 className="MainCards__info__wrap__card1__h2">PROJECT 1</h2>
          <div className="MainCards__info__wrap__card1__line"></div>
          <p className="MainCards__info__wrap__card1__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="MainCards__info__wrap__card1__button">
            <p className="MainCards__info__wrap__card1__button__p">Look it up</p>
          </div>
        </div>
        <div className="MainCards__info__wrap__card1 bg">
        <img src={m1} alt="" />

        <img className='mimages' src={mglav2} alt="" />

        <h2 className="MainCards__info__wrap__card1__h2">PROJECT 2</h2>
        <div className="MainCards__info__wrap__card1__line"></div>
        <p className="MainCards__info__wrap__card1__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="MainCards__info__wrap__card1__button">
            <p className="MainCards__info__wrap__card1__button__p">Look it up</p>
          </div>
        </div>
        <div className="MainCards__info__wrap__card1">
        <img src={m1} alt="" />

        <img className='mimages' src={mglav3} alt="" />

        <h2 className="MainCards__info__wrap__card1__h2">A bit longer title for 3rd project</h2>
        <div className="MainCards__info__wrap__card1__line"></div>
        <p className="MainCards__info__wrap__card1__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="MainCards__info__wrap__card1__button">
            <p className="MainCards__info__wrap__card1__button__p">Look it up</p>
          </div>
        </div>
        <div className="MainCards__info__wrap__card1">
        <img src={m1} alt="" />

        <img className='mimages' src={mglav4} alt="" />

        <h2 className="MainCards__info__wrap__card1__h2">PROJECT 4</h2>
        <div className="MainCards__info__wrap__card1__line"></div>
        <p className="MainCards__info__wrap__card1__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className="MainCards__info__wrap__card1__button">
            <p className="MainCards__info__wrap__card1__button__p">Look it up</p>
          </div>
        </div>
        </div> 
        </div>
      
    </div>
  )
}

export default MainCards