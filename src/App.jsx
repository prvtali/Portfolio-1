import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import HeaderContent from './components/HeaderContent'
import MainCards from './components/MainCards'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import MainInfo from './components/MainInfo'
import Footer from './components/Footer'


function App() {
  const [users, setUsers] = useState(null)
  // useEffect(() => {
  //    fetch('https://jsonplaceholder.typicode.com/users')
  //    .then(data => data.json())
  //    .then(res => setUsers(res))
  // }, [])

  const [links, setLinks] = useState([
    { id: 1, name: 'Обо мне' },
    { id: 2, name: 'Мои работы' },
    { id: 3, name: 'Контакты' }
  ])
  return (
    <div className="wrapper">
      <Nav />
      <HeaderContent/>
      <MainCards/>
      <Section1/>
      <Section2/>
      <MainInfo/>
      <Footer/>
    </div>
  )
}

export default App