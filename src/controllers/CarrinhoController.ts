import Carrinho from '../repository/CarrinhoRepository'
import ICarrinho from '../models/ICarrinho';


class CarrinhoController {
    constructor() { }

    getCarrinhos() {
        return Carrinho.find({});
    }

    createCarrinho(obj: ICarrinho) {
        return Carrinho.create(obj);
    }

    getCarrinhoById(id: string) {
        return Carrinho.findById(id);
    }

    updateCarrinho(id, obj: ICarrinho) {
        return Carrinho.findByIdAndUpdate(id, obj);
    }

    deleteCarrinho(id: string) {
        return Carrinho.remove(id);
    }
}

export default new CarrinhoController();