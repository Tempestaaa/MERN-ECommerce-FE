import Hero from "../../components/user/Hero";
import NewCollections from "../../components/user/NewCollections";
import NewLetter from "../../components/user/NewLetter";
import Offers from "../../components/user/Offers";
import Popular from "../../components/user/Popular";

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
