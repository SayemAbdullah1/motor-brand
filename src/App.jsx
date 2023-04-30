import Gallery from "./components/Home/Gallery"
import NavBar from "./components/Home/NavBar"
import Offers from "./components/Home/Offers"
import Products from "./components/Home/Products"
import Slider from "./components/Home/Slider"
import VideoSec from "./components/Home/VideoSec"
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
AOS.init()
  return (
    <div className="bg-gray-200">
      <NavBar/>
      <Slider></Slider>
      <Offers></Offers>
      <VideoSec></VideoSec>
      <Products></Products>
      <Gallery></Gallery>
    </div>
  )
}

export default App
