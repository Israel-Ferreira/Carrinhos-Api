"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Carrinho = new mongoose_1.Schema({
    modelo: { type: String, required: true },
    marca: { type: String, required: true },
    fotoUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
Carrinho.pre("save", () => {
    if (!this.createdAt) {
        this.createdAt = new Date();
    }
});
exports.default = Carrinho;
//# sourceMappingURL=Carrinho.js.map