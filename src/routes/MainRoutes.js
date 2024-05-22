import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Currency from '../pages/currency/Currency'
import MainPage from '../pages/mainPage/MainPage'
import Weather from '../pages/weather/weather'
import Got from '../pages/got/got'
import DetailPage from '../pages/detailPage/DetailPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path={'/'} element={<MainPage/>}/>
        <Route path={'/weather'} element={<Weather/>}/>
        <Route path={'/got'} element={<Got/>}/>
        <Route path={'/got/:id'} element={<DetailPage/>}/>
        <Route path={'/currency'} element={<Currency/>}/>
        <Route path={'/:notfound'} element={<ErrorPage/>}/>
    </Routes>
  )
}

export default MainRoutes