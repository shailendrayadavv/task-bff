import express from "express";
import { IRoute } from "./interfaces/route.interface";
import cors from 'cors'
import bodyParser from "body-parser";

class App{
    public app: express.Application
    public port: number
    
    constructor(routes:IRoute[]){
        this.app= express()
        this.port=2000

        this.initializeMiddleWares()
        this.initializeRoutes(routes)
    }
    public listen(){
        this.app.listen(this.port,()=>{
            console.log(`started listening on ${this.port}`)
        });
    }

    private initializeMiddleWares(){
        this.app.use(cors());
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: false }))
    }

    private initializeRoutes(routes:IRoute[]){
        routes.forEach(route => {
            this.app.use('/',route.router)
        });
    }
}

export default App


