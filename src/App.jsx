import './App.css'
import React from 'react'
import Header from './header'
import Footer from './Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './assets/Pages/HomePage'
import ServicePage from './assets/Pages/ServicePage'
import AboutPage from './assets/Pages/AboutPage'
import WhyPage from './assets/Pages/WhyPage'
import ClientPage from './assets/Pages/ClientPage'
import TeamPage from './assets/Pages/TeamPage'
import { Link } from 'react-router-dom'



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/service' element={<ServicePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/why' element={<WhyPage />} />
          <Route path='/team' element={<TeamPage />} />
          <Route path='/client' element={<ClientPage />} />

        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
