
import React from "react";
import InternForm from "./form";
import Table from "./table";
import {HashRouter,Route,Link} from 'react-router-dom';
import Home from "./home";
import Edit from "./editDetails";


  const App=() =>{
  return (
    <HashRouter>
    <div className="container">
      <div className="row mt-2">
        <ul>
          <li  id="li"><a  id="title" href="https://www.cartrabbit.io/">CartRabbit</a></li>
          <li className="li"><Link className="Link" to="/">Home</Link></li>
          <li className="li"><Link className="Link"  to="/Intern">Interns</Link></li>
          <li className="li"><Link   className="Link" to="/Detail">Details</Link></li>
        </ul>
      </div>
      <div id="content">
            
            <Route exact path="/"><Home/></Route>
            <Route exact path="/Intern"><InternForm/></Route>
            
            <Route exact path="/Detail"><Table/></Route>
            <Route exact path="/back"><Table/></Route>
            <Route exact path="/edit/:id" component={Edit}/>
      </div>
    </div>
    </HashRouter>
  );
}

export default App;
