"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class DataBase {
    constructor() {
        this.DB_URI = "mongodb://localhost:27017/carrinhos";
    }
    createConnection() {
        if (process.env.NODE_ENV === "production") {
            mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
            this.logger();
        }
        else {
            mongoose.connect(this.DB_URI, { useNewUrlParser: true });
            this.logger();
        }
    }
    logger() {
        this.DB_CONNECTION = mongoose.connection;
        this.DB_CONNECTION.on('connected', () => console.log(`O Mongoose foi Iniciado`));
        this.DB_CONNECTION.on('error', err => console.log(`Erro na conexão: ${err}`));
        this.DB_CONNECTION.on('disconnected', () => console.log(`O Mongoose foi desconectado`));
    }
    closeConnection(message, callback) {
        this.DB_CONNECTION.close(() => {
            console.log(`O mongoose foi desconectado por: ${message}`);
            callback();
        });
    }
}
exports.default = DataBase;
//# sourceMappingURL=Database.js.map