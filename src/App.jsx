import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import MyNavbar from "./components/Navbar";
import SidebarRight from "./components/SidebarRight";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Profile />
              <SidebarRight /> 
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
