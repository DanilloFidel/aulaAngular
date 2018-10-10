import { CartItem } from './shared/shopping-cart.model'
import { Injectable } from '@angular/core';
import { Offer } from './shared/offer.model';

@Injectable()
export class ShoppingCartService{
    public itens: CartItem[] = [];


    public showItens(): CartItem[]{
        return this.itens
    }

    public addItem(item : Offer): void{
        let itemShoppingCart = new CartItem(
            item.id,
            item.imagens[0],
            item.titulo,
            item.descricao_oferta,
            item.valor,
            1
        )
        this.itens.push(itemShoppingCart)
    }
}

