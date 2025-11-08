import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "../../dist/style.css";

function App() {
  function handleLogoClick() {
    window.location.reload();
  }

  return (
    <>
      <Navbar handleLogoClick={handleLogoClick} />
      <Main handleLogoClick={handleLogoClick} />
    </>
  );
}

export default App;
