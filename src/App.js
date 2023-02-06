import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, Contact, Login, Register, RestPassword } from "./pages";
import { Header, Footer } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/rest" element={<RestPassword />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
