import { BrowserRouter, Route, Switch } from "react-router-dom";
import { FunctionComponent } from "react";
import Navbar from "./components/Navbar";
import About from "./containers/About";
import Feed from "./containers/Feed";
import Profile from "./containers/Profile";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Home from "./containers/Home";
import Notification from "./containers/Notification";



const App:FunctionComponent = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route path={" About, Feed, Profile, Signup, Login, Notification , /"} />         
          <Route exact path="/About" component={About} />
          <Route exact path="/Feed" component={Feed} />
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Notification" component={Notification} />
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
    

  );
};

export default App;
