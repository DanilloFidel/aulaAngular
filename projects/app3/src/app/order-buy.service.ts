import { Order } from "./shared/orders.model";
import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";




@Injectable()
export class OrderBuyService{

    constructor(private http: Http){}

    public effectBuy(order: Order): Observable<number> {

        let headers: Headers = new Headers()

        headers.append('Content-type', 'application/json');
         
        return this.http.post(
            `http://localhost:3000/produtos`,
            JSON.stringify(order),
            new RequestOptions({ headers: headers})
        )
        .pipe(map((response: Response)=>response.json().id) )
        }
    
}
