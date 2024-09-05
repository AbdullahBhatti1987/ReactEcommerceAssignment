import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import BestSeller from "./Pages/BestSeller";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Auth from "./Pages/Auth";
import SignUp from "./Pages/Auth/SignUp";
import SignIn from "./Pages/Auth/SignIn";
import Footer from './Pages/Footer';
import Cart from './Pages/Cart';
import Search from './Pages/Search';
import NotFound from './Pages/NotFound';
import ProductDetail from './Pages/ProductDetail';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/bestseller" element={<BestSeller />} />
            <Route path="/products" element={<Products/>} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Route>
          <Route>
            <Route path="/auth" index element={<Auth />} />
            <Route path="/auth/signup" element={<SignUp />} />
            <Route path="/auth/signin" element={<SignIn />} />
          </Route>
            <Route path="/search" index element={<Search />} />
            <Route path="/cart" index element={<Cart />} />
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
