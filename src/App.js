import "./App.css";
import Layout from "./layout.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage.jsx"; // Import HomePage
import AboutPage from "./pages/About/AboutPage.jsx"; // Import AboutPage
import Industries from "./pages/Industries/Industries.jsx";
import WhoWeAre from "./pages/WhoWeAre/WhoWeAre.jsx";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<WhoWeAre />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
