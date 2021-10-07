import * as express from "express"
import { Routes } from "./routes/routes";
import { connection } from "./connection/connection";
const bodyParser = require("body-parser");
const { handleCors, logStream } = require("./utils/utils");
const morgan = require("morgan");


class App {
    public app: express.Application;
    public routePrv: Routes; constructor() {
        this.app = express();
        this.app.use(handleCors);
        this.app.use(morgan("combined", { stream: logStream() }));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.routePrv = new Routes();
        this.routePrv.routes(this.app);
        connection.then(() => {
            console.log("MongoDb Connected Successfully");
        }).catch((err) => { console.log("MongoDb Connection failed: ", err) });
    }
}
export default new App().app;