// ...existing code...
import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '/src/pages/Home.jsx'
import MainNavigation from './components/MainNavigation'
import axios from 'axios'


const getAllRecipies = async () =>{
  let allRecipies = []
  await axios.get('http://localhost:3001/recipie').then(res =>{
    allRecipies = res.data
  })
  return allRecipies
}
// Define router: MainNavigation is the layout (renders Navbar, Outlet, Footer)
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainNavigation />,
    children: [
      { index: true, element: <Home />, loader: getAllRecipies} // renders at "/"
    ]
  }
])

export default function App() {
  return <RouterProvider router={router} />
}




