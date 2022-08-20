import React from 'react'
import { Outlet } from "react-router-dom";
import {Header} from "./Components/Pages/Parts/Header";
import {Footer} from "./Components/Pages/Parts/Footer";
export const Layout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}
