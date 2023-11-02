import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout.jsx";
import Home from "./components/home.jsx";
import Apps from "./components/apps.jsx";
import AboutMe from "./components/aboutme.jsx";
import NoPage from "./components/nopage.jsx";
import "./css/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="apps" element={<Apps />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
