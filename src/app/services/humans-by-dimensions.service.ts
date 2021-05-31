import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import TravelHistoryViewModel from "../models/travel-history.view-model";
@Injectable()
export class HumansByDimensionsService {

  constructor(
    protected http: HttpClient
  ) { }

  getByDimension(id: number):  any {
    return this.http.get('https://localhost:5001/HumansByDimensions/GetResponsableHumanOriginalDimension/' + id);
  }

  getHumanDetail(id: number):  any {
    return this.http.get('https://localhost:5001/HumansByDimensions/GetHumanOriginalDimensionWithTravels/' + id);
  }
  saveTravel(data: TravelHistoryViewModel):  any {
    return this.http.post('https://localhost:5001/TravelHistory/Save', data);
  }


}
