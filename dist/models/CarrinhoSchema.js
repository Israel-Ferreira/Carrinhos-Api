"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CarrinhoSchema = new mongoose_1.Schema({
    modelo: { type: String, required: true },
    marca: { type: String, required: true },
    fotoUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
CarrinhoSchema.pre("save", () => {
    if (!this.createdAt) {
        this.createdAt = new Date();
    }
});
exports.default = CarrinhoSchema;
//# sourceMappingURL=CarrinhoSchema.js.map