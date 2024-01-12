import './App.css'

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from './layout/Layout';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Blog from './pages/blog/Blog';
import Contacts from './pages/contacts/Contacts';
import Courses from './pages/courses/Courses';
import Events from './pages/events/Events';


function App() {




  const router =createBrowserRouter([
    {
      path:'/',
      element: <Layout></Layout>,
      children:[
        {
          index:true,
          element:<Home></Home>
        },
        {
         path:"about",
         element:<About></About> 
        },
        {
         path:"blog",
         element:<Blog></Blog>
        },
        {
         path:"contacts",
         element:<Contacts></Contacts> 
        },
        {
         path:"courses",
         element:<Courses></Courses>
        },
        {
         path:"events",
         element:<Events></Events>
        }
      ]
    }
  ])


  return <RouterProvider router={router}></RouterProvider>
}

export default App
