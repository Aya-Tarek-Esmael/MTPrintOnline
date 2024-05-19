
import './App.css'
import { Routes ,Route} from 'react-router-dom';
import Topbar from './Components/Topbar/Topbar'
import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Brochure from './Components/Brochure/Brochure';
import PersonalCards from './Components/PersonalCards/PersonalCards';
import Receipts from './Components/Receipts/Receipts';
import Magazine from './Components/Magazine/Magazine';
import BlockNote from './Components/BlockNote/BlockNote';
import Prescription from './Components/Prescription/Prescription';
import Sticker from './Components/Sticker/Sticker';
import Catalogue from './Components/Catalogue/Catalogue';
import LetterHead from './Components/LetterHead/LetterHead';
import Envelopes from './Components/Envelopes/Envelopes';
import Folders from './Components/Folders/Folders';
import Books from './Components/Books/Books';
import InvoiceBook from'./Components/InvoiceBook/InvoiceBook';
import BannerProducts from './Components/BannerProducts/BannerProducts';
import BannerProDetailsStand from './Components/BannerProdDetails/BannerProDetailsStand'
import BannerProDetailsXBanner from './Components/BannerProdDetails/BannerProDetailsXBanner'
import BannerProDetailsBannerNormall from './Components/BannerProdDetails/BannerProDetailsBannerNormall'
import BannerProDetailsBobUP  from './Components/BannerProdDetails/BannerProDetailsBobUp'
import BannerProDetailsRollUp  from './Components/BannerProdDetails/BannerProDetailsRollUp'
import BannerProDetailsFlex from './Components/BannerProdDetails/BannerProDetailsFlex'
import BannerProDetailsCanvas from './Components/BannerProdDetails/BannerProDetailsCanvas'
import BannerProDetailsVinyl from './Components/BannerProdDetails/BannerProDetailsVinyl'
import BannerProDetailsWallpaper from './Components/BannerProdDetails/BannerProDetailsWallpaper'
import BannerProDetailsCarVinyl from './Components/BannerProdDetails/BannerProDetailsCarVinyl';
import BannerProDetailsStan from './Components/BannerProdDetails/BennerProDetailsStan';
import BannerProDetailsSeeThrough from './Components/BannerProdDetails/BannerProDetailsSeeThrough';
import BannerProDetailsBannerCoated from './Components/BannerProdDetails/BannerProDetailsBannerCoated';
import BannerProDetailsGlossy from './Components/BannerProdDetails/BannerProDetailsGlossy';
import BannerProDetailsReflectiveBanner from './Components/BannerProdDetails/BannerProDetailsReflectiveBanner';
import ReflectiveBanner from './Components/BannerProduct/ReflectiveBanner';
import BannerCoated from './Components/BannerProduct/BannerCoated';
import BannerStand from './Components/BannerProduct/BannerStand';
import BobUp from './Components/BannerProduct/BobUp';
import Canvas from './Components/BannerProduct/Canvas';
import CarVinyl from './Components/BannerProduct/CarVinyl';
import Flex from './Components/BannerProduct/Flex';
import RollUp from './Components/BannerProduct/RollUp';
import SeeThrough from './Components/BannerProduct/SeeThrough';
import NormallBanner from './Components/BannerProduct/NormallBanner';
import Gloosy from './Components/BannerProduct/Gloosy';
import XBanner from './Components/BannerProduct/XBanner';
import Vinyl from './Components/BannerProduct/Vinyl';
import Wallpaper from './Components/BannerProduct/Wallpaper';
import Stan from './Components/BannerProduct/Stan';
import NormallCard from './Components/PersonalCards/NormallCard';
import CurveCard from './Components/PersonalCards/CurveCard';
import OneColorCard from './Components/PersonalCards/OneColorCard';
import SpotCard from './Components/PersonalCards/SpotCard';
import StickerCard from './Components/PersonalCards/StickerCard';
import MattCardTwoFaces from './Components/PersonalCards/MattCardTwoFaces';
import SpotCurveCard from './Components/PersonalCards/SpotCurveCard';
import MattLargeCard from './Components/PersonalCards/MattLargeCard';
import Papers from './Components/Papers/Papers';
import BannerProDetailsPrintAndCut from './Components/BannerProdDetails/BannerProDetailsPrintAndCut';



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
  
    <Route path='/personalcards/' element={ <PersonalCards />}/>
    <Route path='/personalcards/كارت-عادي' element={<NormallCard />} />
    <Route path='/personalcards/كارت-كيرف' element={<CurveCard />} />
    <Route path='/personalcards/كارت عادي بظهر واحد لون' element={<OneColorCard />} />
    <Route path='/personalcards/كارت سبوت مقاس 8.5*5' element={<SpotCard />} />
    <Route path='/personalcards/كارت ستيكر' element={<StickerCard />} />
    <Route path='/personalcards/كارت مط وجهين' element={<MattCardTwoFaces />} />
    <Route path='/personalcards/كارت سبوت كيرف مقاس 5.5*9' element={<SpotCurveCard />} />
    <Route path='/personalcards/كارت مط كبير بدون كيرف' element={<MattLargeCard />} />







    





    {/*  */}
    <Route path='/papers/' element={<Papers />} />
    <Route path='brochure'  element={<Brochure/>} />
    <Route path='receipts' element={<Receipts />} />
    <Route path='magazine' element={< Magazine />} />
    <Route path='blocknote' element={<BlockNote/>} />
    <Route path='prescription' element={<Prescription />} />
    <Route path='sticker' element={<Sticker />} />
    <Route path='catalogue' element={<Catalogue />} />
    <Route path='letterhead' element={<LetterHead />} />
    <Route path='envelopes' element={<Envelopes />} />
    <Route path='folder' element={<Folders />} />
    <Route path='books' element={<Books />} />
    <Route path='invoicebook' element={<InvoiceBook />} />

{/*  */}
    <Route path='/bannerproducts/' element={<BannerProducts />} />
    <Route path='/bannerproducts/reflectivebanner' element={<ReflectiveBanner />} />
    <Route path='/bannerproducts/stan' element={<Stan />} />
    <Route path='/bannerproducts/bannerCoated' element={<BannerCoated />} />
    <Route path='/bannerproducts/canvas' element={<Canvas />} />
    <Route path='/bannerproducts/xBanner' element={<XBanner />} />
    <Route path='/bannerproducts/normallBanner' element={<NormallBanner />} />
    <Route path='/bannerproducts/vinyl' element={<Vinyl />} />
    <Route path='/bannerproducts/carVinyl' element={<CarVinyl/>} />
    <Route path='/bannerproducts/flex' element={<Flex />} />
    <Route path='/bannerproducts/bannerStand' element={<BannerStand />} />
    <Route path='/bannerproducts/seeThrough' element={<SeeThrough/>} />
    <Route path='/bannerproducts/rollUp' element={<RollUp />} />
    <Route path='/bannerproducts/bobUp' element={<BobUp />} />
    <Route path='/bannerproducts/gloosy' element={<Gloosy />} />
    <Route path='/bannerproducts/wallpaper' element={<Wallpaper />} />


    

    {/* product Details */}
    <Route path='/ادجستبل-ستاند/' element={<BannerProDetailsStand />} />
    <Route path='اكس-بانر/' element={<BannerProDetailsXBanner />} />
    <Route path='بانر-عادي/' element={<BannerProDetailsBannerNormall />} />
    <Route path='بوب-اب-كامل/' element={<BannerProDetailsBobUP />} />
    <Route path='roll-up/' element={<BannerProDetailsRollUp />} />
    <Route path='flex/' element={<BannerProDetailsFlex/>} />
    <Route path='canvas/' element={<BannerProDetailsCanvas/>} />
    <Route path='vinyl/' element={<BannerProDetailsVinyl/>} />
    <Route path='wallpaper/' element={<BannerProDetailsWallpaper/>} />
    <Route path='carvinyl/' element={<BannerProDetailsCarVinyl/>} />
    <Route path='stan/' element={<BannerProDetailsStan/>} />
    <Route path='seethrough/' element={<BannerProDetailsSeeThrough/>} />
    <Route path='bannercoated/' element={<BannerProDetailsBannerCoated/>} />
    <Route path='glossy/' element={<BannerProDetailsGlossy/>} />
    <Route path='reflectivebanner/' element={<BannerProDetailsReflectiveBanner/>} />
    <Route path='printandcut/' element={<BannerProDetailsPrintAndCut/>} />

   
    
    </Routes>
    <Footer />
    </div>
  )
}

export default App
