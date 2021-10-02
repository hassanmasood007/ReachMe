import { BrowserRouter, Route, Switch } from "react-router-dom";
import { FunctionComponent } from "react";

import HomeLayout from "./containers/Layouts/homeLayout";
import About from "./containers/Pages/about";
import Feed from "./containers/Pages/feed";
import Profile from "./containers/Pages/profile";
import Login from "./containers/Pages/login";
import Signup from "./containers/Pages/signup";
import Home from "./containers/Pages/home";
import Notification from "./containers/Pages/notification";

const App: FunctionComponent = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            path={[
              "about",
              "feed",
              "profile",
              "signup",
              "login",
              "notification",
              "/",
            ]}
          >
            <HomeLayout>
              <Route exact path="/about" component={About} />
              <Route exact path="/feed" component={Feed} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/notification" component={Notification} />
              <Route exact path="/" component={Home} />
            </HomeLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
