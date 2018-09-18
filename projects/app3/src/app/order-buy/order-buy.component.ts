import { Component, OnInit } from '@angular/core';
import { OrderBuyService } from '../order-buy.service';
import { Order } from '../shared/orders.model';

@Component({
  selector: 'app-order-buy',
  templateUrl: './order-buy.component.html',
  styleUrls: ['./order-buy.component.css'],
  providers: [ OrderBuyService ]
})
export class OrderBuyComponent implements OnInit {

  //pedido
  public order: Order = new Order("","","","");
  public idOrderBuy: number;

  public adress: string = '';
  public number: string = '';
  public complement: string = '';
  public payMethod: string = '';

  //controle de validação dos campos

  public validAdress: boolean;
  public validNumber: boolean;
  public validComplement: boolean;
  public validPayMethod: boolean;

  //estado primitivo 

  public primaryAdress: boolean = true;
  public primaryNumber: boolean = true;
  public primaryComplement: boolean = true;
  public primaryPayMethod: boolean = true;

  //botão estado da compra

  public statusForm: string= 'disable'



  constructor(private orderBuyService: OrderBuyService) { }

  ngOnInit() {
    //this.orderBuyService.effectBuy()
  }

  public updateAdress(adress: string): void{
    this.adress = adress;
    this.primaryAdress = false;
    this.validAdress = this.adress.length > 4 ? true : false;
    
    this.ableForm();
  }

  public updateNumber(number: string): void{
    this.number = number;
    this.primaryNumber = false;
    this.validNumber = this.number.length > 0 ? true : false;

    this.ableForm();
  }

  public updateComplement(comp: string): void{
    this.complement = comp;
    this.primaryComplement = false;
    this.validComplement = this.complement.length > 0 ? true : false;

    this.ableForm();
  }

  public updatePaymentMethod(method: string): void{
    this.primaryPayMethod = false;
    this.payMethod = method;
    this.validPayMethod = this.payMethod.length > 0 ? true : false;

    this.ableForm();
  }

  public ableForm(): void{
    if(this.validAdress == true && this.validNumber == true && this.validPayMethod == true){
      this.statusForm = ''
    }else{
      this.statusForm = 'disable'
    }
  }

  public confirmPucharse(): void{
    this.order.adress = this.adress;
    this.order.complement = this.complement;
    this.order.number = this.number;
    this.order.complement = this.complement;
    
    this.orderBuyService.effectBuy(this.order)
      .subscribe((orderId: number)=>{
        this.idOrderBuy = orderId;
      })
  }

}
