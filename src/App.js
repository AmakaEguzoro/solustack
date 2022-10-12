import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./shared/navbar";
import Footer from "./shared/footer";
import "./App.css";
import About from "./pages/about";
import Services from "./pages/services";
import Projects from "./pages/projects";
import Why from "./pages/why";
import Contact from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/featured-projects" element={<Projects />} />
        <Route path="/why-us" element={<Why />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
