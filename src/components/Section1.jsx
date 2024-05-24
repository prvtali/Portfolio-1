import linee from '../assets/images/linee.png'
import linees from '../assets/images/linees.png'
import lineess from '../assets/images/lineess.png'
import lineesss from '../assets/images/lineesss.png'

import lineglav from '../assets/images/lineglav.png'
import lineglav2 from '../assets/images/lineglav2.png'
import lineglav3 from '../assets/images/lineglav3.png'
import lineglav4 from '../assets/images/lineglav4.png'

const Section1 = () => {
  return (
    <div className='Section1' id='skills'>
        <h2 className='Section1__h2 container3'>Technologies</h2>
        <div className="Section1__lines">
            <div className="Section1__lines__line1 container">
                <p className='Section1__lines__line1__p'>Html</p>
                <div className="Section1__lines__line1__line">
                     <img src={linee} alt="" />

                     <img className='lineglav' src={lineglav} alt="" />

                </div>
               
            </div>
            <div className="Section1__lines__line2 container">
                <p className='Section1__lines__line1__p'>CSS, Sass & Bootstrap</p>
                <div className="Section1__lines__line1__line ">
                <img src={lineesss} alt="" />

                <img className='lineglav' src={lineglav2} alt="" />

                </div>
            </div>
            <div className="Section1__lines__line3 container">
                <p className='Section1__lines__line1__p'>JavaScript, TypeScript, JQuery</p>
                <div className="Section1__lines__line1__line ">
                <img src={linee} alt="" />

                <img className='lineglav' src={lineglav} alt="" />

                </div>
            </div>
            <div className="Section1__lines__line4 container">
                <p className='Section1__lines__line1__p'>UI design in Figma</p>
                <div className="Section1__lines__line1__line ">
                <img src={linees} alt="" />

                <img className='lineglav' src={lineglav3} alt="" />

                </div>
            </div>
            <div className="Section1__lines__line5 container">
                <p className='Section1__lines__line1__p'>React</p>
                <div className="Section1__lines__line1__line">
                <img src={lineess} alt="" />

                <img className='lineglav' src={lineglav4} alt="" />

                </div>
            </div>
        </div>
    </div>
  )
}

export default Section1