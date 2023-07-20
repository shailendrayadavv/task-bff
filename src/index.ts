import App from "./app";
import { SportsRoute, CompetitionsRoute } from "./routes";

const app = new App([new SportsRoute(), new CompetitionsRoute()]);
app.listen();
