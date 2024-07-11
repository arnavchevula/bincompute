import Nav from "../components/Nav";
import HeroSection from "../components/HeroSection";
import SubHero from "../components/SubHero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeBanner from "../components/HomeBanner";
import "./Home.css";
function Home() {
  return (
    <main className={"Hero__Container"}>
      <Header />
      <SubHero />
      <HomeBanner />
      <Footer />
    </main>
  );
}
export default Home;
