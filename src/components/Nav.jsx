import HeaderImg from '../assets/images/HeaderImg.png'

const Nav = () => {
  return (
    <div className='header'>
      <div className="header-nav container2">
        <div className="header-nav__wrap">
          <img className='header-nav__img' src={HeaderImg} alt="" />
        <h1 className='header-nav__h1'>Portfolio</h1>
        </div>
      <ul className='header-nav__ul'>
        <a href="http://" target="_blank" rel="noopener noreferrer #projects"><li className='header-nav__ul__li'>Projects</li></a>
        <a href="#about"><li className='header-nav__ul__li'>About me</li></a>
        <a href="#skills"><li className='header-nav__ul__li'>Skills</li></a>
      </ul>
      </div>
    </div>
  )
}

export default Nav