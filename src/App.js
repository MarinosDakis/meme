import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import MemeEditor from "./components/MemeEditor/MemeEditor";
import ImageGallery from "./components/ImageGallery/ImageGallery";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ImageGallery />} />
        <Route path="gallery" element={<ImageGallery />} />
        <Route path="edit" element={<MemeEditor />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
