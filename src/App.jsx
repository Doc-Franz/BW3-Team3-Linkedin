import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Profile from "./components/Profile";
import Jobs from "./components/Jobs";
import ProfilePage from "./components/ProfilePage";
import JobFromSearch from "./components/JobFromSearch";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:jobToSearch" element={<JobFromSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
