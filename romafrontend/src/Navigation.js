import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Latest from "./components/Latest";
import About from "./pages/Aboutusnew";
import App from "./pages/App";
import Gallery from "./pages/Gallery";
import Latestnews from "./pages/Latestnews";
import Matchday from "./pages/Matchday";
import Podcast from "./pages/Podcast";
import Support from "./pages/Support";
import Fanzone from "./pages/Fanzone";
import Exclusives from "./pages/Exclusives";
import Contact from "./pages/Contactus";
// import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import SignUp from "./pages/SignUp";
import Sitemap from "./pages/Sitemap";
import Table from "./pages/Table";
import Ad from "./pages/Adwithus";
import Archive from "./pages/Archives"
import Fanhome from "./pages/Exclusives"
import Forum from "./pages/Forum";
import Activities from "./pages/Activities";
import Headernew from "./components/Headernew";
import Result from "./pages/Results";
import Event from "./pages/Events";
import Blog from "./pages/Blog";
import Followus from "./components/Followus";
export default function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/latest" element={<Latestnews />}></Route>
        <Route path="/matchday" element={<Matchday />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/podcast" element={<Podcast />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="/fanzone" element={<Fanzone />}></Route>
        <Route path="/activities" element={<Activities />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/exclusives" element={<Exclusives />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/sitemap" element={<Sitemap />}></Route>
        <Route path="/table" element={<Table />}></Route>
        <Route path="/ad" element={<Ad />}></Route>
        <Route path="/archive" element={<Archive />}></Route>
        <Route path="/home" element={<Fanhome />}></Route>
        <Route path="/forum" element={<Forum />}></Route>
        <Route path="/results" element={<Result />}></Route>
        <Route path="/events" element={<Event />}></Route>
        <Route path="/blogentry" element={<Blog />}></Route>
        <Route path="/1" element={<Headernew />}></Route>
        <Route path="/Follow" element={<Followus />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
