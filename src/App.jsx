import { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Component/Layout/Layout";
import Start from "./Component/Start/Start";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Portfolio from "./Component/Portfolio/Portfolio";

Portfolio
let x = createBrowserRouter([{ path: "", element: <Layout />,children:[
  {index:true,element:<Start/>},
  {path:'about',element:<About/>},
  {path:'contact',element:<Contact/>},
  {path:'portfolio',element:<Portfolio/>}
] }]);

function App() {
  return <RouterProvider router={x}></RouterProvider>;
}

export default App;
