export class Lifes {
  constructor(
    public full: boolean,
    public urlFull: string = "/assets/coracao_cheio.png",
    public urlEmpty: string = "/assets/coracao_vazio.png"
  ) {}

  public showLife(): string {
    if (this.full) {
      return this.urlFull;
    } else {
      return this.urlEmpty;
    }
  }
}
