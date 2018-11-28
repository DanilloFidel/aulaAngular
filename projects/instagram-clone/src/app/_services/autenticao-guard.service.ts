import { CanActivate } from "@angular/router";
import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AutenticacaoGuard implements CanActivate{

  constructor(private authService: AuthService){

  }

  public canActivate(): boolean{
    return this.authService.estaAutenticado();
  }

}
