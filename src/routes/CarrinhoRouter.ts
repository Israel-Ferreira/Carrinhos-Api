import CarrrinhoRoutes from './CarrinhoRoutes'
import {Router} from 'express'

class CarrrinhoRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.carrrinhoRouter();
    }

    carrrinhoRouter() {
        
        this.router.get("/", CarrrinhoRoutes.getAll);
        this.router.get('/:id', CarrrinhoRoutes.getById);
        this.router.post('/new-Carrrinho', CarrrinhoRoutes.createCarrinho);
        this.router.put('/:id', CarrrinhoRoutes.update);
        this.router.delete('/:id', CarrrinhoRoutes.deletar);
    }

}


export default new CarrrinhoRouter();