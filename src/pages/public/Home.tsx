import Hero from "../../components/Hero";
import NewCollections from "../../components/NewCollections";
import NewLetter from "../../components/NewLetter";
import Offers from "../../components/Offers";
import Popular from "../../components/Popular";

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewLetter />
    </div>
  );
};

export default Home;
