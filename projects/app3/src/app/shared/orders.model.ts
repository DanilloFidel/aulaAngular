import { CartItem } from "./shopping-cart.model";

export class Order{
    constructor(
        public adress: string, 
        public number: string,
        public payMethod: string,
        public complement: string,
        public itens: CartItem[]
        ){}
}