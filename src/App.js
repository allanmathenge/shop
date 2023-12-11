import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navbar />} />
          <Route path="/shop" element={<CartContainer />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
