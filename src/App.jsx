
import './App.css'
import { Routes ,Route} from 'react-router-dom';
import Topbar from './Components/Topbar/Topbar'
import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Brochure from './Components/Brochure/Brochure';
import PersonalCards from './Components/PersonalCards/PersonalCars';
import Receipts from './Components/Receipts/Receipts';
import Magazine from './Components/Magazine/Magazine';
import BlockNote from './Components/BlockNote/BlockNote';
import Prescription from './Components/Prescription/Prescription';
import Sticker from './Components/Sticker/Sticker';
import Catalogue from './Components/Catalogue/Catalogue';
import LetterHead from './Components/LetterHead/LetterHead';
import Envelopes from './Components/Envelopes/Envelopes';
import Folders from './Components/Folders/Folders';
import BannerProducts from './Components/BannerProducts/BannerProducts';
import BannerProDetails from './Components/BannerProdDetails/BannerProDetails'
import BannerProDetails2 from './Components/BannerProdDetails/BannerProDetails2'
import BannerProDetails3 from './Components/BannerProdDetails/BannerProDetails3'
import BannerProDetails4 from './Components/BannerProdDetails/BannerProDetails4'
import BannerProDetails5 from './Components/BannerProdDetails/BannerProDetails5'
import BannerProDetails6 from './Components/BannerProdDetails/BannerProDetails6'



function App() {


  return (
    <div className=''>
     <Topbar/>
     <Nav />
     {/* <Home/> */}
    <Routes>
    <Route path='/'  element={<Home/>} />
    <Route path='/الرئيسية'  element={<Home/>} />
    <Route path='/اتصل بنا'  element={<Contact/>} />
    <Route path='/brochure'  element={<Brochure/>} />
    <Route path='/personalcards' element={ <PersonalCards />}/>
    <Route path='receipts' element={<Receipts />} />
    <Route path='magazine' element={< Magazine />} />
    <Route path='blocknote' element={<BlockNote/>} />
    <Route path='prescription' element={<Prescription />} />
    <Route path='sticker' element={<Sticker />} />
    <Route path='catalogue' element={<Catalogue />} />
    <Route path='letterhead' element={<LetterHead />} />
    <Route path='envelopes' element={<Envelopes />} />
    <Route path='folder' element={<Folders />} />
    <Route path='/bannerproducts' element={<BannerProducts />} />
    <Route path='bannerprodetails/:id' element={<BannerProDetails />} />
    <Route path='bannerprodetails2/:id' element={<BannerProDetails2 />} />
    <Route path='bannerprodetails3/:id' element={<BannerProDetails3 />} />
    <Route path='bannerprodetails4/:id' element={<BannerProDetails4 />} />
    <Route path='bannerprodetails5/:id' element={<BannerProDetails5 />} />
    <Route path='bannerprodetails6/:id' element={<BannerProDetails6 />} />
    






    


    </Routes>
    <Footer />
    </div>
  )
}

export default App
