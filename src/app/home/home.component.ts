import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginationCardsComponent } from '../components/pagination-cards.component';
import HumansByDimensionsViewModel from '../models/humans-by-dimensions.view-model';
import { HumansByDimensionsService } from '../services/humans-by-dimensions.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})

export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(PaginationCardsComponent, { static: true }) paginationCardsComponent: PaginationCardsComponent;

  constructor(
    private route: ActivatedRoute,
    private humansByDimensionsService: HumansByDimensionsService) { }

  listHumansByDimensions: Array<HumansByDimensionsViewModel> = new Array<HumansByDimensionsViewModel>();
  lstHumansByDimensionsPaged: Array<HumansByDimensionsViewModel> = new Array<HumansByDimensionsViewModel>();

  selectedPage: number = 1;
  pageIndex: number = 1;


  ngOnInit() {}

  ngAfterViewInit() {
    this.humansByDimensionsService.getByDimension(0).subscribe((data: Array<HumansByDimensionsViewModel>) => {

      this.listHumansByDimensions = data;
      this.lstHumansByDimensionsPaged = this.listHumansByDimensions.slice(0, 2);
      this.paginationCardsComponent.startedPagination(this);
    })
  }
}
