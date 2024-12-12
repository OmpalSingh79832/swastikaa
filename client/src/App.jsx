import { Route, Routes } from "react-router-dom";
// import "./components/home.css"
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import LoginPage from "./pages/LoginPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        {/* <Route path="/blog/blog-details" element={<BlogDetails />} /> */}
        <Route path="/blog-details/:id" element={<BlogDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
