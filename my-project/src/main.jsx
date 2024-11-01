import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import ProductList from './pages/ProductList';
import Profile from '../src/pages/Profile/Profile';
import Profileinfo from '../src/pages/Profile/Profileinfo';
import Userprofile from '../src/pages/Profile/Userprofile';
import Orderlist from '../src/pages/Profile/Orderlist';
import Setting from '../src/pages/Profile/Setting';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/products/:id",
    element: <ProductList />
  },
  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
      path: "userprofile",
      element: <Userprofile/>
    },
    {
      path: "profileinfo",
      element: <Profileinfo/>
    },
    {
      path: "orderlist",
      element: <Orderlist/>
    },
    {
      path: "setting",
      element: <Setting/>
    }]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


