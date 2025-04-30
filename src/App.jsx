import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Services from './components/Services/Services'

export default function App() {

  const router = createBrowserRouter([

    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home></Home> },
        { path: 'about', element: <About></About> },
        { path: 'projects', element: <Projects></Projects> },
        { path: 'contact', element: <Contact></Contact> },
        { path: 'services', element: <Services></Services> },
      ]
    }

  ])

  return (
    <>

      <RouterProvider router={router}></RouterProvider>
    </>
  )
}
