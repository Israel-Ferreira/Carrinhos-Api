import CarrinhoSchema from '../models/CarrinhoSchema'
import * as mongoose from 'mongoose'

export default mongoose.model('Carrinho',CarrinhoSchema,'Carrinhos')