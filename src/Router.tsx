import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Home from "./routes/Home";
import Login from "./routes/Login";

interface RouterProps {}

function Router({}: RouterProps) {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/Login" component={Login}>
        <Login  />
        </Route>
        <Route path="/:coinId">
        <Coin  />
        </Route>
        <Route path="/">
        <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;