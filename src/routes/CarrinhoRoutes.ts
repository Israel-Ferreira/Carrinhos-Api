import * as httpStatus from 'http-status';
import CarrinhoController from '../controllers/CarrinhoController';

const sendResp = (res, statusCode, body) => {
    res.status(statusCode).json({ 'result': body });
}

class CarrinhoRoutes {
    constructor() { }

    getAll(req, res, next) {

        CarrinhoController.getCarrinhos()
            .then(resp => sendResp(res, httpStatus.OK, resp))
            .catch(err => sendResp(res, httpStatus.INTERNAL_SERVER_ERROR, err.message));
    }

    getById(req, res, next) {
        let { id } = req.params;

        if (!id) {
            sendResp(res, httpStatus.NOT_FOUND, "Id não encontrado");
        }

        CarrinhoController.getCarrinhoById(id)
            .then(resp => sendResp(res, httpStatus.OK, resp))
            .catch(err => console.error(err.message));
    }


    update(req, res, next) {
        let { id } = req.params;
        let {modelo,marca,fotoUrl} = req.body;

        if (modelo && marca && fotoUrl) {
            let obj = {modelo,marca,fotoUrl};

            CarrinhoController.updateCarrinho(id, obj)
                .then(resp => sendResp(res, httpStatus.OK, resp))
                .catch(err => console.error(err.message));
        }
    }


    createCarrinho(req, res, next) {
        const {modelo,marca,fotoUrl} = req.body;
        if (modelo && marca && fotoUrl) {
            let obj = {modelo,marca,fotoUrl};
            CarrinhoController.createCarrinho(obj)
                .then(resp => sendResp(res, httpStatus.CREATED, 'Carrinho Adicionado com sucesso'))
                .catch(err => console.error(err.message));
        } else {
            sendResp(res, httpStatus.INTERNAL_SERVER_ERROR, "Erro: Campos Vazios");
        }
    }

    deletar(req, res, next) {
        let { id } = req.params;

        CarrinhoController.deleteCarrinho(id)
            .then(resp => sendResp(res, httpStatus.OK, 'Carrinho Apagado com sucesso'))
            .catch(err => console.error(err.message));
    }
}

export default new CarrinhoRoutes();
