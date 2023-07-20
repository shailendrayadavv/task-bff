import App from "./app";
import { SportsRoute, CompetitionsRoute, ContinentsRoute } from "./routes";

const app = new App([
  new SportsRoute(),
  new CompetitionsRoute(),
  new ContinentsRoute(),
]);
app.listen();
