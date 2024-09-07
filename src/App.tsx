import React from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navigate, Route, Routes } from "react-router-dom"
import { Favorites } from "./pages";

const Basket = React.lazy(() => import('@/pages/Basket'))
const Contact = React.lazy(() => import('@/pages/Contact'))
const Detail = React.lazy(() => import('@/pages/Detail'))
const ProductsPage = React.lazy(() => import('@/pages/ProductsPage'))
const Loading = React.lazy(() => import('@/shared/components/Loading'))
const Header = React.lazy(() => import('@/shared/layout/Header'))
const Footer = React.lazy(() => import('@/shared/layout/Footer'))
const Home = React.lazy(() => import('@/pages/Home'))
const About = React.lazy(() => import('@/pages/About'))

function App() {

  return (
    <>
      <Header />
      <React.Suspense fallback={<Loading />} >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to={'/'} />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </React.Suspense>
    </>
  )
}

export default App
