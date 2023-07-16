import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./pages/home_page";
import RecommendPage from "./pages/recommend_page";
import ContactPage from "./pages/contact_page";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="recommend" element={<RecommendPage />} />
          <Route path="contact_us" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
