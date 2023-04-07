import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Hero from './Component/Hero'
import Nav from './Component/Nav'
import Tabs from './Component/Tabs'
import Home from './Component/Home'
import Courses from './Component/Courses'
import About from './Component/About'


function App() {

  return (
    <Router>
      <Nav />
      {/* <Hero />
      <Tabs /> */}
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/Courses' element={<Courses/>} />
      <Route exact path='/about' element={<About/>} />

      </Routes>
    </Router>
  )
}

export default App
