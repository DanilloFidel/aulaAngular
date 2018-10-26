import { Offer } from "./shared/offer.model";
import { Http, Response } from "../../node_modules/@angular/http";
import { Injectable } from "../../node_modules/@angular/core";
import { Observable } from "../../node_modules/rxjs";

import { map, retry } from "rxjs/operators";

@Injectable()
export class OffersService {
  constructor(public http: Http) {}

  public getOffers(): Promise<Offer[]> {
    //efetuar requisição http
    //retornar uma promise com um array de offers
    return this.http
      .get(`http://localhost:3000/ofertas?destaque=true`)
      .toPromise()
      .then((response: Response) => response.json());
  }

  public getOffersByCategory(category: string): Promise<Offer[]> {
    return this.http
      .get(`http://localhost:3000/ofertas?categoria=${category}`)
      .toPromise()
      .then((response: Response) => response.json());
  }

  public getOfferById(id: number): Promise<Offer> {
    return this.http
      .get(`http://localhost:3000/ofertas?id=${id}`)
      .toPromise()
      .then((response: Response) => response.json()[0]);
  }

  public getHowtoUseById(id: number): Promise<string> {
    return this.http
      .get(`http://localhost:3000/como-usar?id=${id}`)
      .toPromise()
      .then((response: Response) => {
        return response.json()[0].descricao;
      });
  }

  public getWhereIsById(id: number): Promise<string> {
    return this.http
      .get(`http://localhost:3000/onde-fica?id=${id}`)
      .toPromise()
      .then((response: Response) => {
        return response.json()[0].descricao;
      });
  }

  public searchOffer(userSearch: string): Observable<Offer[]> {
    return this.http
      .get(`http://localhost:3000/ofertas?descricao_oferta_like=${userSearch}`)
      .pipe(
        map((response: Response) => response.json()),
        retry(10)
      );
  }
}
