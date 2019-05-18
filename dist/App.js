"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const CarrinhoRouter_1 = require("./routes/CarrinhoRouter");
const Database_1 = require("./config/Database");
class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.database = new Database_1.default();
        this.createDbConnection();
    }
    middlewares() {
        this.app.use(morgan("dev"));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use('/api/v1/carrinhos', CarrinhoRouter_1.default.router);
    }
    createDbConnection() {
        this.database.createConnection();
    }
    closeDbConnection() {
        this.closeDbConnection();
    }
}
exports.default = new App();
//# sourceMappingURL=App.js.map