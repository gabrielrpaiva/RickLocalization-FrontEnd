import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import HumansByDimensionsViewModel from "../models/humans-by-dimensions.view-model";





import { Router } from '@angular/router';



@Injectable()
export class HumansByDimensionsService {
  //: Person = new Person;person

  constructor(
    protected http: HttpClient
  ) { }

  getByDimension(id: number) {

    /*    return this.http
       .get<BaseResponse[]>('http://localhost:5000/api/Person'); */
    return this.http.get('https://localhost:5001/HumansByDimensions/GetResponsableHumanOriginalDimensionTeste');
   // return this.http.get('https://localhost:5001/HumansByDimensions/GetResponsableHumanOriginalDimensionTeste', { headers })
  }

  getHeaders() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Origin', '*')
      .set('Cache-control', 'no-cache')
      .set('Cache-control', 'no-store')
      .set('Expires', '0')
      .set('Pragma', 'no-cache');
    return headers;
  }


}
