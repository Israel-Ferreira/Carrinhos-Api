import {Schema} from 'mongoose'

const CarrinhoSchema =  new Schema({
    modelo: {type: String, required: true},
    marca: {type: String, required: true},
    fotoUrl: {type: String, required: true},
    createdAt: {type: Date, default: Date.now}
})

CarrinhoSchema.pre("save",() => {
    if(!this.createdAt){
        this.createdAt = new Date()
    }
})


export default CarrinhoSchema
