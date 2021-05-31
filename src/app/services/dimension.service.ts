import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { environment } from 'src/environments/environment';
import HumansByDimensionsViewModel from "../models/humans-by-dimensions.view-model";





import { Router } from '@angular/router';
import TravelHistoryViewModel from "../models/travel-history.view-model";



@Injectable()
export class DimensionService {
  //: Person = new Person;person

  constructor(
    protected http: HttpClient
  ) { }

  getAll():  any {

    return this.http.get('https://localhost:5001/Dimention/GelAll');

  }




}
