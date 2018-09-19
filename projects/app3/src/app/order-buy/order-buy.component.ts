import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderBuyService } from '../order-buy.service';
import { Order } from '../shared/orders.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order-buy',
  templateUrl: './order-buy.component.html',
  styleUrls: ['./order-buy.component.css'],
  providers: [ OrderBuyService ]
})
export class OrderBuyComponent implements OnInit {
  
  @ViewChild('form') public form: NgForm;
  constructor(private OrderBuyService: OrderBuyService){}

  ngOnInit(){
      
  }

  public getFormValues(): void{
    console.log(this.form)
  }
}
