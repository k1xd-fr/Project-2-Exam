import Cards from "../Layout/Cards";
import Header from "../Layout/Header";
import Map from "../Layout/Map";
import Slider from "../UI/Slider/Slider";

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <Slider items={[{title: 'dsadsa', image: 'dasdasd'}]}>
          <div>
            <img
              src="/img/slider-img1.png"
              alt="Slide 1"
              width={1100}
              height={410}
            />
          </div>
          <div>
            <img
              src="/img/slider-img1.png"
              alt="Slide 2"
              width={1100}
              height={410}
            />
          </div>
          <div>
            <img
              src="/img/slider-img1.png"
              alt="Slide 3"
              width={1100}
              height={410}
            />
          </div>
        </Slider>
        <Cards />
        <Map />
      </div>
    </>
  );
};

export default Home;
