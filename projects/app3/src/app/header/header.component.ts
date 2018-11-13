import { Component, OnInit } from "@angular/core";
import { Observable, Subject, of } from "../../../node_modules/rxjs";

import { Offer } from "../shared/offer.model";
import { OffersService } from "../offers.service";
import {
  switchMap,
  debounceTime,
  distinctUntilChanged,
  catchError
} from "../../../node_modules/rxjs/operators";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  providers: [OffersService]
})
export class HeaderComponent implements OnInit {
  public result: Observable<Offer[]>;
  private subjectSearch: Subject<string> = new Subject<string>();
  constructor(private offerService: OffersService) {}

  ngOnInit() {
    this.result = this.subjectSearch.pipe(
      debounceTime(1000),
      /* aguarda o tempo determinado para execução do switchMap 
      que por sua vez chama o método searchOffer que faz a requisição Http */
      distinctUntilChanged(), //este método verifica se o termo da busca é o mesmo que o da busca anterior e evita requisições desnecessárias
      switchMap((searchV: string) => {
        //Se a pesquisa for em branco retorna um Observable do tipo Array de ofertas
        if (searchV.trim() === "") {
          return of<Offer[]>(
            [] /*array vazio para não retornar todos os itens*/
          );
        }

        console.log("fazendo requisição http para api");
        return this.offerService.searchOffer(searchV);
      }),
      catchError((error: any) => {
        console.log(error);
        return of<Offer[]>([]); //retornando um array vazio
      })
    );
  }

  public search(searchValue: string): void {
    console.log("keyup caracter :", searchValue);
    this.subjectSearch.next(searchValue);
  }

  public cleanSearch(): void{
    this.subjectSearch.next("")
  }
}
