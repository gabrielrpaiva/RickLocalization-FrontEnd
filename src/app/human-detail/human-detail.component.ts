import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import HumansByDimensionsViewModel from '../models/humans-by-dimensions.view-model';
import { HumansByDimensionsService } from '../services/humans-by-dimensions.service';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TravelHistoryComponent } from '../travel-history/travel-history.component';
import TravelHistoryViewModel from '../models/travel-history.view-model';
import { DimensionService } from '../services/dimension.service';
import DimensionViewModel from '../models/dimention.view-model';
import { TravelComponent } from '../travel/travel.component';


@Component({
  selector: 'app-human-detail',
  templateUrl: './human-detail.component.html'

})


export class HumanDetailComponent {

  constructor(
    private  matDialog: MatDialog,
    private route: ActivatedRoute,
    private humansByDimensionsService: HumansByDimensionsService,
    private dimensionService: DimensionService
    ) { }
  humansByDimensions: HumansByDimensionsViewModel = new HumansByDimensionsViewModel({});
  lstDimensions: Array<DimensionViewModel> = new Array<DimensionViewModel>();
  async ngOnInit() {

   await this.getDetail();
await this.getDimentions();
  }

  showTravels() {

    const dialogLetter = this.matDialog.open(TravelHistoryComponent, {
      width: '40%',
      height: `80%`
    });
    dialogLetter.componentInstance.lstTravels = this.humansByDimensions.travelHistories;

  }

  async getDetail() {
    this.humansByDimensionsService.getHumanDetail(this.route.snapshot.params.id).toPromise().then((data: HumansByDimensionsViewModel)=>{
      this.humansByDimensions = data;
      console.log(this.humansByDimensions)
        console.log(data);

     })
  }

  async getDimentions() {
    this.dimensionService.getAll().toPromise().then((data: Array<DimensionViewModel>)=>{
      this.lstDimensions = data.filter(x => x.id !== this.humansByDimensions.idDimension);
        console.log(data);

     })
  }

  showModalSaveTravel() {

    const dialogLetter = this.matDialog.open(TravelComponent, {
      width: '40%',
      height: `50%`
    });
    dialogLetter.componentInstance.lstDimensions = this.lstDimensions;
    dialogLetter.componentInstance.idHumansByDimensions = Number(this.route.snapshot.params.id);
    dialogLetter.afterClosed().subscribe(result => {
      this.getDetail();
    });
  }





}
