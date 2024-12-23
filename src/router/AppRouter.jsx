import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Dijital from '../pages/Dijital'
import Drm from '../pages/Drm'
import MobilUygulama from '../pages/MobilUygulama'
import Uiux from '../pages/Uiux'
import WebTasarim from '../pages/WebTasarim'
import WebYazilim from '../pages/WebYazilim'
import YapayZeka from '../pages/YapayZeka'
import Hakkimizda from '../pages/Hakkimizda'
import Iletisim from '../pages/Iletisim'
import Teklif from '../pages/Teklif'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/DijitalDonusum' element={<Dijital />} />
        <Route path='/Drm' element={<Drm />} />
        <Route path='/MobilUygulama' element={<MobilUygulama />} />
        <Route path='/Ui&Ux' element={<Uiux />} />
        <Route path='/WebTasarim' element={<WebTasarim />} />
        <Route path='/WebYazilim' element={<WebYazilim />} />
        <Route path='/YapayZeka' element={<YapayZeka />} />
        <Route path='/Hakkimizda' element={<Hakkimizda />} />
        <Route path='/Iletisim' element={<Iletisim />} />
        <Route path='/Teklif' element={<Teklif />} />
        <Route path='*' element={<Home />} /> 
      </Routes>
  
    </BrowserRouter>
  )
}

export default AppRouter
