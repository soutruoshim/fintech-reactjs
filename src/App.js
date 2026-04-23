import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import UpdateProfile from "./pages/UpdateProfile.jsx";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

import { AuditorRoute, CustomerRoute } from "./services/Guard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/profile" element={<CustomerRoute element={<Profile />} />} />
        <Route path="/update-profile" element={<CustomerRoute element={<UpdateProfile />} />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* WILDCARD ROUTE */}
        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
