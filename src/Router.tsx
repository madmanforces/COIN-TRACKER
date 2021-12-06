import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

interface RouterProps {}

function Router({}: RouterProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
        <Coin  />
        </Route>
        <Route path="/">
        <Coins />
        </Route>
        <Route path="/login">
        <Coin  />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;