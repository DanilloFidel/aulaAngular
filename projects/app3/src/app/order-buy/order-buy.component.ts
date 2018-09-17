import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-buy',
  templateUrl: './order-buy.component.html',
  styleUrls: ['./order-buy.component.css']
})
export class OrderBuyComponent implements OnInit {

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


  constructor() { }

  ngOnInit() {
  }

  public updateAdress(adress: string): void{
    this.adress = adress;
    this.primaryAdress = false;
    this.validAdress = this.adress.length > 4 ? true : false;
    console.log(this.validAdress)
  }

  public updateNumber(number: string): void{
    this.number = number;
    this.primaryNumber = false;
    this.validNumber = this.number.length > 0 ? true : false;
  }

  public updateComplement(comp: string): void{
    this.complement = comp;
    this.primaryComplement = false;
    this.validComplement = this.complement.length > 0 ? true : false;
  }

  public updatePaymentMethod(method: string): void{
    this.primaryPayMethod = false;
    this.payMethod = method;
    this.validPayMethod = this.payMethod.length > 0 ? true : false;
  }

}
