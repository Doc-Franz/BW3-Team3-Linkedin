import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
