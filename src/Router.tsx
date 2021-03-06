import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Views/Coin";
import Home from "./routes/Views/LandingPage/Home";
import Login from "./routes/Views/Login/Login";
import SignUp from "./routes/Views/signUp/SignUp";
import Auth from './routes/hoc/auth'





function Router() {
  return (
      <BrowserRouter>
        <Switch>
        <Route   path="/Home" component={Auth(Home,true)}>
            <Home />
          </Route>
          <Route path="/SignUp" component={Auth(SignUp,false)}/>
          <Route  path="/:coinId" component={Auth("/:coinId",true)}>
            <Coin />
          </Route>
          <Route  path="/" component={Auth(Login,false)} />
        </Switch>
      </BrowserRouter>
  );
}
export default Router;