import "./App.css";
import Layout from "./layout.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage.jsx"; // Import HomePage
import AboutPage from "./pages/About/AboutPage.jsx"; // Import AboutPage
import Industries from "./pages/Industries/Industries.jsx";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Industries />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
