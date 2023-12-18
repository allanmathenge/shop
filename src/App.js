import { Routes, Route } from "react-router-dom";
import CartContainer from "./features/cart/CartContainer";
import Layout from "./components/Layout";
import SinglePostPage from "./features/cart/SinglePostPage";
import About from "./features/cart/About";
import Contact from "./features/cart/Contact";
import Hero from "./features/cart/Hero";
import { Navigate } from "react-router-dom";

function App() {
  //Modal was deleted here
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Hero />} />
        <Route path="shop">
          <Route index element={<CartContainer />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path=":id" element={<SinglePostPage />} />
        </Route>
        {/* Catch all will be repaced with 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
