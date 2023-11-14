import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


// Routes de l'appli
const router = createBrowserRouter([
  {
    path:"/", element: <Home />
  },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
