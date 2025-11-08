import IntroSection from "./IntroSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import Footer from "./Footer";

function Main({ handleLogoClick }) {

   

  return (
    <main>
      <IntroSection />
      <SecondSection />
      <ThirdSection />
      <Footer handleLogoClick={handleLogoClick} />
    </main>
  );
}

export default Main;
