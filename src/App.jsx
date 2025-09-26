import "./App.css";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <>
      <div className="sticky top-0">
        <Navbar />
      </div>

      <Footer />
    </>
  );
}

export default App;
