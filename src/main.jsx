import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import User from './Components/User/User.jsx'
import {  Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Github, { githubInfoLoader } from './Components/Github/Github.jsx'

// way 1

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

// easy way2 ṭo assembly multiple page

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       {/* har ek route nesting ho sakta hai */}
       <Route path='' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       {/* dynamic value url se kaise lena hai (user) */}
       <Route path='user/:Userid' element={<User/>}/>
       {/* how to optimize the api */}
       <Route 
       loader={githubInfoLoader}
       path='github' element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* how to create router */}
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
