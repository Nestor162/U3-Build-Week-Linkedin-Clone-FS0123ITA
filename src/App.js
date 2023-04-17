import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import RightSidebar from "./components/RightSidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import MainProfilePage from "./components/MainProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/me" element={<MainProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
