import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import HumansByDimensionsViewModel from '../models/humans-by-dimensions.view-model';
import TravelHistoryViewModel from '../models/travel-history.view-model';
import { HumansByDimensionsService } from '../services/humans-by-dimensions.service';
import { MatDialogRef } from "@angular/material/dialog";


@Component({
  selector: 'app-travel-history',
  templateUrl: './travel-history.component.html',
  styleUrls: ['./travel-history.component.css']

})


export class TravelHistoryComponent {

  constructor(
    public dialogRef: MatDialogRef<TravelHistoryComponent>,
    private route: ActivatedRoute,
    private humansByDimensionsService: HumansByDimensionsService) { }
  listHumansByDimensions: HumansByDimensionsViewModel = new HumansByDimensionsViewModel({});

  lstTravels: Array<TravelHistoryViewModel> = new Array<TravelHistoryViewModel>();
  async ngOnInit() {


  }


  close() {
    this.dialogRef.close();
  }




}
