import Navbar from "../../components/navbar/Navbar";
import HomeSearch from "../../components/home/HomeSearch";
import Content from "../../components/content/ImageContent";

const Home = () => {
  return (
    <div>
      <div className="top">
        <Navbar />
      </div>
      <div className="container">
        <HomeSearch />
      </div>

      <div className="content">
        <Content />
      </div>
    </div>
  );
};

export default Home;
