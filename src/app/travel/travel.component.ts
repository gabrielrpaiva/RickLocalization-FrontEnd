import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

    this.humansByDimensionsService.saveTravel(travel).subscribe((data: any) => {

     this.close();

    })
  }
  close() {
    this.dialogRef.close();
  }




}
