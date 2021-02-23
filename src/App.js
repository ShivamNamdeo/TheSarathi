import './App.css';
import Body from "./Body";
import Header from "./Header";
import AppViewPage from "./AppViewPage";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import JoinTeam from "./JoinTeam";
import Post from "./post";

import { Notifications } from 'react-push-notification';





import {BrowserRouter as Router ,Switch,Route} from "react-router-dom";

function App() {





  return (

  	<Router>
    <div className="app_main">
    	<Notifications />
    	<Header/>
    	<Switch>
    	
      		
      		<Route path= "/" exact component={Body} />
      		<Route path= "/AppViewPage" component ={AppViewPage}/>
          <Route path= "/ContactUs" component ={ContactUs}/>
          <Route path= "/ContactUs" component ={ContactUs}/>
          <Route path= "/AboutUs" component ={AboutUs}/>
          <Route path= "/JoinTeam" component ={JoinTeam}/>
          <Route path= "/Post/:id" component ={Post}/>
          <Route path= "/Post"  component ={Post}/>


          

          

     	</Switch>


    </div>

    </Router>
  );
}

export default App;
