import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import HumansByDimensionsViewModel from '../models/humans-by-dimensions.view-model';
import TravelHistoryViewModel from '../models/travel-history.view-model';
import { HumansByDimensionsService } from '../services/humans-by-dimensions.service';
import { MatDialogRef } from "@angular/material/dialog";
import DimensionViewModel from '../models/dimention.view-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',

})


export class TravelComponent {

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<TravelComponent>,
    private route: ActivatedRoute,
    private humansByDimensionsService: HumansByDimensionsService) { }

  idHumansByDimensions: number = 0;
  dimensionsForm: FormGroup = new FormGroup({});

  lstDimensions: Array<DimensionViewModel> = new Array<DimensionViewModel>();
  async ngOnInit() {
    this.buildForm();
    console.log(this.lstDimensions);
  }

  buildForm() {
    this.dimensionsForm = this.formBuilder.group({
      'dimensionId': [null, Validators.required],
    });
  }


  async save() {

    const travel: TravelHistoryViewModel = new TravelHistoryViewModel({});
    travel.idHumansByDimensions =  this.idHumansByDimensions;
    travel.idTargetDimension =  Number(this.dimensionsForm.get("dimensionId")?.value);
    travel.travelDate = new Date();
    console.log(travel);
    this.humansByDimensionsService.saveTravel(travel).toPromise().then((data: any) => {

      console.log(data);

    })
  }
  close() {
    this.dialogRef.close();
  }




}
