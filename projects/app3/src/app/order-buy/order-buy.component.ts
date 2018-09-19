import { Component, OnInit} from '@angular/core';
import { OrderBuyService } from '../order-buy.service';
import { Order } from '../shared/orders.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-order-buy',
  templateUrl: './order-buy.component.html',
  styleUrls: ['./order-buy.component.css'],
  providers: [ OrderBuyService ]
})
export class OrderBuyComponent implements OnInit {

  public idOrder: number

  public form: FormGroup = new FormGroup({
    "adress": new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(120)]),
    "number": new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
    "complement": new FormControl(null, [Validators.maxLength(80)]),
    "payMethod" : new FormControl(null, [Validators.required])
  })
  
  constructor(private OrderBuyService: OrderBuyService){}

  ngOnInit(){
      
  }

  public getFormValues(): void{
    if(this.form.status === 'INVALID'){
      this.form.get('adress').markAsTouched();
      this.form.get('number').markAsTouched();
      this.form.get('payMethod').markAsTouched();
    }else{
      let order: Order = new Order(
        this.form.value.adress,
        this.form.value.number,
        this.form.value.complement,
        this.form.value.payMethod
        )
      this.OrderBuyService.effectBuy(order)
      .subscribe((idOrder: number)=> this.idOrder = idOrder)
    }
  }
}
