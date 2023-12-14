import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import CartContainer from "./features/cart/CartContainer";
import Navbar from "./components/Navbar";
import About from "./features/cart/About";
import Contact from "./features/cart/Contact";
import Modal from "./features/modal/modalSlice";
import Footer from "./components/Footer";

function App() {
  const { isOpen } = useSelector((state) => state.modal);

  return (
    <main>
      {isOpen && <Modal />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/shop" element={<CartContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </main>
  );
}

export default App;
