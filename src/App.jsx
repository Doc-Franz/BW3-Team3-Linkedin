import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyNavbar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
