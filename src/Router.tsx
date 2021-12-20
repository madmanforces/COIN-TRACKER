import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Views/Coin";
import Home from "./routes/Views/Home";
import Login from "./routes/Views/Login";
import SignUp from "./routes/Views/SignUp";
import Auth from './routes/hoc/auth'




function Router() {
  return (
      <BrowserRouter>
        <Switch>
        <Route   path="/Home" component={Auth(Home, null)}>
            <Home />
          </Route>
          <Route path="/SignUp" component={Auth(SignUp, false)} />
          <Route  path="/:coinId">
            <Coin />
          </Route>
          <Route  path="/" component={Auth(Login,false)} />
        </Switch>
      </BrowserRouter>
  );
}
export default Router;