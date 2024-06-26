
import './App.css'
import { Routes ,Route} from 'react-router-dom';
import Topbar from './Components/Topbar/Topbar'
import Nav from './Components/Nav/Nav'
import Home from './Components/Home/Home'
import Cart from "./Components/Cart/Cart";
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Brochure from './Components/Brochure/Brochure';
import PersonalCards from './Components/PersonalCards/PersonalCards';
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
import Uniform from './Components/Uniform/Uniform';
import PlasticCups from './Components/Cups/PlasticCups/PlasticCups';
import PaperCups from './Components/Cups/PaperCups/PaperCups';
import BinAndNutsBags from './Components/Bags/BinAndNutsBags/BinAndNutsBags';
import Bags from './Components/Bags/Bags';
import ClothBags from './Components/Bags/ClothBags/ClothBags';
import PalasticBags from './Components/Bags/PalasticBags/PalasticBags';
import KraftBags from './Components/Bags/KraftBags/KraftBags';
import Cups from './Components/Cups/Cups';
import UniformForm from './Components/Uniform/UniformForm/UniformForm';
import Charcters from './Components/Characters/Characters';
import Acrylic from './Components/Characters/Acrylic/Acrylic';
import Face2ColorsxAcrylic from './Components/Characters/Face2ColorsxAcrylic/Face2ColorsxAcrylic';
import AcrylicXAcrylicAndStainlessSteel from './Components/Characters/AcrylicXAcrylicAndStainlessSteel/AcrylicXAcrylicAndStainlessSteel';
import SolidStainless from './Components/Characters/SolidStainless/SolidStainless';
import StainlessXAcrylic from './Components/Characters/StainlessXAcrylic/StainlessXAcrylic';
import Letters from './Components/Letters/Letters';
import PanelsAndFacades from './Components/PanelsAndFacades/PanelsAndFacades';
import LettersCard from './Components/PanelsAndFacades/LettersCard';


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
    <Route path="/cart" element={<Cart />} />
    
    <Route path='/personalcards/' element={ <PersonalCards />}/>
    <Route path='/personalcards/كارت-عادي' element={<NormallCard />} />
    <Route path='/personalcards/كارت-كيرف' element={<CurveCard />} />
    <Route path='/personalcards/كارت عادي بظهر واحد لون' element={<OneColorCard />} />
    <Route path='/personalcards/كارت سبوت مقاس 8.5*5' element={<SpotCard />} />
    <Route path='/personalcards/كارت ستيكر' element={<StickerCard />} />
    <Route path='/personalcards/كارت مط وجهين' element={<MattCardTwoFaces />} />
    <Route path='/personalcards/كارت سبوت كيرف مقاس 5.5*9' element={<SpotCurveCard />} />
    <Route path='/personalcards/كارت مط كبير بدون كيرف' element={<MattLargeCard />} />


    {/* ورقيات */}
    <Route path='/papers/' element={<Papers />} />
    <Route path='/papers/26/'  element={<Brochure/>} />
    <Route path='/papers/34/' element={< Magazine />} />
    <Route path='/papers/24/' element={<BlockNote/>} />
    <Route path='/papers/30/' element={<Prescription />} />
    <Route path='/papers/31/' element={<Sticker />} />
    <Route path='/papers/33/' element={<Catalogue />} />
    <Route path='/papers/29/' element={<LetterHead />} />
    <Route path='/papers/27/'element={<Envelopes />} />
    <Route path='/papers/32/' element={<Folders />} />
    <Route path='/papers/25/' element={<Books />} />
    <Route path='/papers/28/' element={<InvoiceBook />} />

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
    <Route path='/bannerproducts/5/' element={<BannerProDetailsStand />} />
    <Route path='/bannerproducts/8' element={<BannerProDetailsXBanner />} />
    <Route path='/bannerproducts/9' element={<BannerProDetailsBannerNormall />} />
    <Route path='/bannerproducts/6/' element={<BannerProDetailsBobUP />} />
    <Route path='/bannerproducts/7/'element={<BannerProDetailsRollUp />} />
    <Route path='/bannerproducts/13/' element={<BannerProDetailsFlex/>} />
    <Route path='/bannerproducts/17/'element={<BannerProDetailsCanvas/>} />
    <Route path='/bannerproducts/16/' element={<BannerProDetailsVinyl/>} />
    <Route path='/bannerproducts/23/' element={<BannerProDetailsWallpaper/>} />
    <Route path='/bannerproducts/22/'element={<BannerProDetailsCarVinyl/>} />
    <Route path='/bannerproducts/15/' element={<BannerProDetailsStan/>} />
    <Route path='/bannerproducts/14/' element={<BannerProDetailsSeeThrough/>} />
    <Route path='/bannerproducts/11/' element={<BannerProDetailsBannerCoated/>} />
    <Route path='/bannerproducts/12/' element={<BannerProDetailsGlossy/>} />
    <Route path='/bannerproducts/10/' element={<BannerProDetailsReflectiveBanner/>} />
    <Route path='/bannerproducts/18/' element={<BannerProDetailsPrintAndCut/>} />

   {/* cups */}
   <Route path='/cups/' element={<Cups/>} />
   <Route path='/cups/35/' element={< PlasticCups/>} />
   <Route path='/cups/36/' element={< PaperCups/>} />

   {/* bags */}
   <Route path='/bags/' element={< Bags/>} />
   <Route path='/bags/38/' element={< BinAndNutsBags/>} />
   <Route path='/bags/40/' element={< ClothBags/>} />
   <Route path='/bags/37/' element={< PalasticBags/>} />
   <Route path='/bags/39/' element={< KraftBags/>} />

   {/* uniform */}
   <Route path='/uniform/' element={<Uniform/>} />
   <Route path='/uniform/:id/' element={<UniformForm/>} />

  {/* PanelsAndFacades */}
  <Route path='/panelsandfacades/' element={<PanelsAndFacades/>} />

  {/* Charcters  */}
  <Route path='/panelsandfacades/letters/' element={<Letters/>} />
  {/* <Route path='/panelsandfacades/letterscard/' element={<LettersCard/>} /> */}

    </Routes>
    <Footer />
    </div>
  )
}

export default App
