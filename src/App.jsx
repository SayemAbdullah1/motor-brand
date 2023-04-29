import Gallery from "./components/Home/Gallery"
import NavBar from "./components/Home/NavBar"
import Offers from "./components/Home/Offers"
import Slider from "./components/Home/Slider"
function App() {

  return (
    <div className="bg-gray-200">
      <NavBar/>
      <Slider></Slider>
      <Offers></Offers>
      <Gallery></Gallery>
    </div>
  )
}

export default App
