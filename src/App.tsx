import React from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
const Loading = React.lazy(() => import('@/shared/components/Loading'))
const Header = React.lazy(() => import('@/shared/layout/Header'))
const Footer = React.lazy(() => import('@/shared/layout/Footer'))
const Home = React.lazy(() => import('@/pages/Home'))
const About = React.lazy(() => import('@/pages/About'))

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <React.Suspense fallback={<Loading />} >
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="*" element={<Navigate to={'/'} />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </React.Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
