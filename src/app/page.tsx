
import Categories from "@/components/Categories"
import Footer from "@/components/Footer"
import Grid from "@/components/Grid"
import Join from "@/components/Join"
import Slider from "@/components/Slider"

function Home(){

  return(
    <div className="flex flex-col justify-center items-center mt-20">

      <Slider />
      <Categories />
      <Grid />
      <Join />
      <Footer />

    </div>
  )
}

export default Home