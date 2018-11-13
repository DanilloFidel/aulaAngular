import { CartItem } from './shared/shopping-cart.model'
import { Injectable } from '@angular/core';
import { Offer } from './shared/offer.model';

@Injectable()
export class ShoppingCartService{
    public itens: CartItem[] = [];
    public totalmount: number = 0


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
        this.checkRepeatedItem(itemShoppingCart)
    }

    public checkRepeatedItem(itemCart: CartItem): void{
        let itemOfCart = this.itens.find((item: CartItem)=> item.id === itemCart.id)

        if(itemOfCart){
            itemOfCart.amount++
        }else{
            this.itens.push(itemCart)
        }
    }

    public calculateTotalAmount(): number{

        let total: number = 0

        this.itens.map((item: CartItem)=>{
            total = total + (item.price * item.amount)
        })

        return total
    }

    public addItemAmount(item: CartItem): void{
        let itemOfCart = this.itens.find((singleItem : CartItem)=> singleItem.id === item.id)

        if(itemOfCart){
            itemOfCart.amount++
        }
      }

    public removeItemAmount(item: CartItem): void{
        let itemOfCart = this.itens.find((singleItem : CartItem)=> singleItem.id === item.id)
        if(itemOfCart){
            itemOfCart.amount--
            this.removeItemFromCart(itemOfCart)
        }
    }

    public removeItemFromCart(item: CartItem): void{
        if(item.amount === 0){
            this.itens.splice(this.itens.indexOf(item), 1)
        }
    }

    public clearCart(): void{
        this.itens = []
    }
}

