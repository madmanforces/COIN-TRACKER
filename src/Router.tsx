import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Home from "./routes/Home";
import Login from "./routes/Login/Login";
import SignUp from "./routes/SignUp/SignUp";
import auth from './routes/hoc/auth'



function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={auth(Home, null )}/>
        <Route exact path="/:coinId" component={auth(Coin, false)}/>
        <Route exact path="/Login" component={auth(Login, false)} />
        <Route exact path="/SignUp" component={auth(SignUp, false)} />
        <Coin  />
      </Switch>
    </BrowserRouter>
  );
}
export default Router;