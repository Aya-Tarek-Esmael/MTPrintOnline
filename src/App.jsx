
import './App.css'
import { Routes ,Route} from 'react-router-dom';
import Topbar from './Components/Topbar/Topbar'
import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';


function App() {
 

  return (
    <>
     <Topbar/>
     <Nav />
     {/* <Home/> */}
    <Routes>
    <Route path='/'  element={<Home/>} />
    <Route path='/الرئيسية'  element={<Home/>} />
    <Route path='/contact'  element={<Contact/>} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
