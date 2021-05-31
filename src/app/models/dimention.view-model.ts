export default class DimensionViewModel {
  id: number;
  name: number;

  constructor(p: any) {
    this.id = p.id !== undefined ? p.id : null;
    this.name = p.name !== undefined ? p.name : null;
  }
}
