import { Component, OnInit} from '@angular/core';
import { Order } from '../shared/orders.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { OrderBuyService } from '../order-buy.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { CartItem } from '../shared/shopping-cart.model';



@Component({
  selector: 'app-order-buy',
  templateUrl: './order-buy.component.html',
  styleUrls: ['./order-buy.component.css'],
  providers: [ OrderBuyService ]
})
export class OrderBuyComponent implements OnInit {
  
  public idOrder: number
  public cartItens: CartItem[]
  
  public form: FormGroup = new FormGroup({
    "adress": new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(120)]),
    "number": new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
    "complement": new FormControl(null, [Validators.maxLength(80)]),
    "payMethod" : new FormControl(null, [Validators.required])
  })
  
  constructor(
    private OrderBuyService: OrderBuyService,
    private cartService: ShoppingCartService
    ){}
    
    ngOnInit(){
      this.cartItens =  this.cartService.showItens()
    }
    
    public getFormValues(): void{
      if(this.form.status === 'INVALID'){
        this.form.get('adress').markAsTouched();
        this.form.get('number').markAsTouched();
        this.form.get('payMethod').markAsTouched();
      }else{
        
        if(this.cartService.showItens().length === 0 ){
            alert('seu carrinho está vazio!')
        }else{
          
          let order: Order = new Order(
            this.form.value.adress,
            this.form.value.number,
            this.form.value.complement,
            this.form.value.payMethod,
            this.cartItens
            )
            this.OrderBuyService.effectBuy(order)
            .subscribe((idOrder: number)=> {
            this.idOrder = idOrder
            this.cartService.clearCart()
            })
          }
        }
      }
      
      public addItemAmount(item: CartItem): void{
        this.cartService.addItemAmount(item)
      }
      
      public removeItemAmount(item: CartItem): void{
        this.cartService.removeItemAmount(item)
      }
    }
    