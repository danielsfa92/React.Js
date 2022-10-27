import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import User from "./User";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { About }  path="/About" />
           <Route component = { User }  path="/User" />
       </BrowserRouter>
   )
}

export default Routes;