"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CarrinhoRoutes_1 = require("./CarrinhoRoutes");
const express_1 = require("express");
class CarrrinhoRouter {
    constructor() {
        this.router = express_1.Router();
        this.carrrinhoRouter();
    }
    carrrinhoRouter() {
        this.router.get("/", CarrinhoRoutes_1.default.getAll);
        this.router.get('/:id', CarrinhoRoutes_1.default.getById);
        this.router.post('/new-Carrrinho', CarrinhoRoutes_1.default.createCarrinho);
        this.router.put('/:id', CarrinhoRoutes_1.default.update);
        this.router.delete('/:id', CarrinhoRoutes_1.default.deletar);
    }
}
exports.default = new CarrrinhoRouter();
//# sourceMappingURL=CarrinhoRouter.js.map