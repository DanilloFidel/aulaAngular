import { Offer } from "./shared/offer.model";
import { Http } from "../../node_modules/@angular/http";
import { Injectable } from "../../node_modules/@angular/core";
import { environment } from "../environments/environment";

@Injectable()
export class OffersService {
  private apiUrl = environment.apiUrl;
  constructor(public http: Http) {}

  public getOffers(): Promise<Offer[]> {
    //efetuar requisição http
    //retornar uma promise com um array de offers
    return this.http
      .get(`${this.apiUrl}?destaque=true`)
      .toPromise()
      .then((response: any) => response.json());
  }

  public getOffersByCategory(category: string): Promise<Offer[]> {
    return this.http
      .get(`${this.apiUrl}?categoria=${category}`)
      .toPromise()
      .then((response: any) => response.json());
  }

  public getOfferById(id: number): Promise<Offer> {
    return this.http
      .get(`${this.apiUrl}?id=${id}`)
      .toPromise()
      .then((response: any) => response.json()[0]);
  }
}
