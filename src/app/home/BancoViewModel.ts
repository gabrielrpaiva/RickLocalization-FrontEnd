export class BancoViewModel {
  image: string;
  tiulo: string;


  constructor(data: any) {
    this.image = data.image != null ? data.image : null;
    this.tiulo = data.tiulo != null ? data.tiulo : null;
  }
}
