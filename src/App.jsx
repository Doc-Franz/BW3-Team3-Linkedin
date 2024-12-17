import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import MyNavbar from "./components/Navbar";
import SideBarRight from "./components/SideBarRight";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<SideBarRight />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
