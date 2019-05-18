"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CarrinhoRepository_1 = require("../repository/CarrinhoRepository");
class CarrinhoController {
    constructor() { }
    getCarrinhos() {
        return CarrinhoRepository_1.default.find({});
    }
    createCarrinho(obj) {
        return CarrinhoRepository_1.default.create(obj);
    }
    getCarrinhoById(id) {
        return CarrinhoRepository_1.default.findById(id);
    }
    updateCarrinho(id, obj) {
        return CarrinhoRepository_1.default.findByIdAndUpdate(id, obj);
    }
    deleteCarrinho(id) {
        return CarrinhoRepository_1.default.remove(id);
    }
}
exports.default = new CarrinhoController();
//# sourceMappingURL=CarrinhoController.js.map