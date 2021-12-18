import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Home from "./routes/Home";
import Login from "./routes/Login/Login";
import SignUp from "./routes/SignUp/SignUp";



function Router() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/Home" component={Home}>
        <Home  />
        </Route>
        <Route path="/signup" component={SignUp} />
        <Route path="/:coinId">
        <Coin  />
        </Route>
        <Route path="/" component={Login} >
        <Login  />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;