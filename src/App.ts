import * as express from 'express'
import * as morgan from 'morgan'
import  * as bodyParser from 'body-parser'
import CarrinhoRouter from './routes/CarrinhoRouter';
import Database from './config/Database';

class App{

    public app: express.Application
    private database: Database

    constructor(){
        this.app = express()
        this.middlewares()
        this.database = new Database();
        this.createDbConnection()
    }

    middlewares(){
        this.app.use(morgan("dev"))
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended: true}))
        this.app.use('/api/v1/carrinhos', CarrinhoRouter.router);
    }


    private createDbConnection(){
        this.database.createConnection();
    }

    closeDbConnection(){
        this.closeDbConnection()
    }
}

export default new App()