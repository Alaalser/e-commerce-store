import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Contact, Login, Register, RestPassword, Admin } from "./pages";
import { Header, Footer } from "./components";
import { ToastContainer } from "react-toastify";
import AdminPrivateRoute from "./components/adminPrivateRoute/AdminPrivateRoute";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/rest" element={<RestPassword />} />
          <Route
            path="/admin/*"
            element={
              <AdminPrivateRoute>
                <Admin />
              </AdminPrivateRoute>
            }
          />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
