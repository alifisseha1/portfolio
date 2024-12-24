import BestSeller from "../../components/BestSeller/BestSeller";

import Hero from "../../components/Hero/Hero";
import LatestCollection from "../../components/LatestCollection/LatestCollection";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import OurPolicy from "../../components/OurPolicy/OurPolicy";

import h from "./home.module.css";
const HomeE = () => {
  return (
    <div className={h.home}>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetter />
    </div>
  );
};

export default HomeE;
