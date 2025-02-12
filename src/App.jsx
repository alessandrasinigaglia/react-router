import { BrowserRouter, Routes, Route } from "react-router-dom";

//layout
import DefaultLayout from "./layouts/DefaultLayout";

//pages
import HomePage from "./pages/Homepage";
import Posts from "./pages/Posts";
import AboutUs from "./pages/AboutUs";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<DefaultLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/aboutus" element={<AboutUs />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
