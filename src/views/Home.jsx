import HeroSection from "../components/HeroSection"
import Services from "../components/Services"
import Trusted from "../components/Trusted"


const Home = () => {


  let data={
    name:'SOHAN SHOP'

  }
  
  return (
    <div className="mt-1">
        <HeroSection data={data} />
        <Services/>
        <Trusted/>
    </div>
  )
}

export default Home
