import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OffersService } from "../../offers.service";
import { Observable, Observer } from "rxjs";
import { interval } from "rxjs";

@Component({
  selector: "app-where-is",
  templateUrl: "./where-is.component.html",
  styleUrls: ["./where-is.component.css"],
  providers: [OffersService]
})
export class WhereIsComponent implements OnInit {
  public howUse: string = "";
  constructor(
    private offerService: OffersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.offerService
      .getWhereIsById(this.route.parent.snapshot.params["id"])
      .then((response: any) => {
        this.howUse = response;
      });
    /*
    let time = interval(3000); //criamos um observable

    time.subscribe((interval: any) => {
      //assistindo esse observable apartir de um subscribe
      console.log(interval);
    });

    */

    //observable (observável)
    let myTestObservable = Observable.create((observer: Observer<string>) => {
      observer.next("primeiro next");
      observer.next("segundo next");
    });
    //observable (observador)
    myTestObservable.subscribe((result: string) => {
      console.log(result);
    });
  }
}
