import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
@Injectable()
export class DimensionService {

  constructor(
    protected http: HttpClient
  ) { }

  getAll():  any {
    return this.http.get('https://localhost:5001/Dimention/GelAll');
  }
}
