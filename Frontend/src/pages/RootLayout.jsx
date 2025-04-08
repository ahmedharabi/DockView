import {Link, Outlet} from "react-router-dom";

export default function RootLayout() {
    return(
       <>
           <h1>root layout</h1>
           <ul>
               <li><Link to={"/containers"}>Containers</Link></li>
               <li><Link to={"/images"}>Images</Link></li>
               <li><Link to={"/volumes"}>volumes</Link></li>
               <li><Link to={"/networks"}>networks</Link></li>
           </ul>
           <Outlet/>


       </>
    )
}