import './App.css'
import {ContainerTable} from "./components/ContainerTable.jsx";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import RootLayout from "@/pages/RootLayout.jsx";
import Images from "@/pages/Images.jsx";
import Volumes from "@/pages/Volumes.jsx";
import Networks from "@/pages/Networks.jsx";

function App() {

 const router=createBrowserRouter([
  {path:"/",
      element:<RootLayout/>,
      children:[
       {path:"/containers", element:<ContainerTable/>},
       {path:"/images", element:<Images/>},
       {path:"/volumes", element:<Volumes/>},
       {path:"/networks", element:<Networks/>},
       {path:"/monitoring", element:<ContainerTable/>},
      ]

  }
 ])
  return <RouterProvider router={router}/>;

}

export default App
