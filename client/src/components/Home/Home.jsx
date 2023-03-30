import Cards from "../Layout/PizzaCards";
import Header from "../Layout/Header";
import Map from "../Layout/Map";
import Slider from "../UI/Slider/Slider";
import Footer from "../Layout/Footer";
import MainAction from "../Layout/MainAction";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <Slider items={[{ title: "dsadsa", image: "dasdasd" }]}>
          <div>
            <Image
              src="/img/slider-img1.png"
              alt="Slide 1"
              width={1100}
              height={410}
            />
          </div>
          <div>
            <Image
              src="/img/slider-img1.png"
              alt="Slide 2"
              width={1100}
              height={410}
            />
          </div>
          <div>
            <Image
              src="/img/slider-img1.png"
              alt="Slide 3"
              width={1100}
              height={410}
            />
          </div>
        </Slider>
        <Cards />
        <MainAction />
        <Map />
        <Footer />
      </div>
    </>
  );
};

export default Home;
