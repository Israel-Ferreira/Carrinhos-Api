"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CarrinhoSchema_1 = require("../models/CarrinhoSchema");
const mongoose = require("mongoose");
exports.default = mongoose.model('Carrinho', CarrinhoSchema_1.default, 'Carrinhos');
//# sourceMappingURL=CarrinhoRepository.js.map