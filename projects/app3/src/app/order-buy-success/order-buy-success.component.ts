import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-order-buy-success',
  templateUrl: './order-buy-success.component.html',
  styleUrls: ['./order-buy-success.component.css']
})
export class OrderBuySuccessComponent implements OnInit {

  @Input() public idOrder: number;

  constructor() { }

  ngOnInit() {
  }

}
