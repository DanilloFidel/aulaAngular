import { CartItem } from './shared/shopping-cart.model'
import { Injectable } from '@angular/core';
import { Offer } from './shared/offer.model';

@Injectable()
export default class ShoppingCartService{
    public itens: CartItem[] = [];


    public showItem(): CartItem[]{
        return this.itens
    }

    public addItem(item : Offer): void{
        console.log(`item recebido ${item}`)
    }
}

