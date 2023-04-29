import Gallery from "./components/Home/Gallery"
import NavBar from "./components/Home/NavBar"
import Offers from "./components/Home/Offers"
import Slider from "./components/Home/Slider"
function App() {

  return (
    <>
      <NavBar/>
      <Slider></Slider>
      <Offers></Offers>
      <Gallery></Gallery>
    </>
  )
}

export default App
