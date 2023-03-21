import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Header from "../../components/header/Header";
import Navbar from "../../components/Navbar/Navbar";
import MailList from "../../components/MailsList/MailList";
import PropertyList from "../../components/propertyList/PropertyList";
import "./Home.css";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home__container">
        <Featured />
        <h1 className="home__title">Browse by property type</h1>
        <PropertyList />
        <h1 className="home__title">Homes guests loves</h1>
        <FeaturedProperties />
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
