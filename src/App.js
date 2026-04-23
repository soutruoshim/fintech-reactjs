import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />

        {/* WILDCARD ROUTE */}
        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
