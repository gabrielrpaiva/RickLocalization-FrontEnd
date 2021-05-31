import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import HumansByDimensionsViewModel from '../models/humans-by-dimensions.view-model';
import { HumansByDimensionsService } from '../services/humans-by-dimensions.service';

@Component({
  selector: 'app-pagination-cards',
  templateUrl: './pagination-cards.component.html',
  styleUrls: ['./pagination-cards.component.css']

})


export class PaginationCardsComponent {

  constructor(
    private route: ActivatedRoute,
    private humansByDimensionsService: HumansByDimensionsService) { }



  parentPage: HomeComponent = new HomeComponent(this.route, this.humansByDimensionsService);


  selectedPage: number = 1;
  totalPages: number = 0;
  totalPagesArray: Array<number> = [];
  ngOnInit() {


  }

  startedPagination(parent: HomeComponent) {
    console.log("startedPagination");
    this.parentPage = parent;
    this.totalPages = Math.ceil(this.parentPage.listHumansByDimensions.length / 2);
    this.totalPagesArray = Array(this.totalPages).fill(this.totalPages).map((x, i) => i);

  }


  changeClassSelectedPage(index: number): string {
    if (this.selectedPage === index) {
      return "page-link selected";
    }

    return "page-link";
  }

  changePage(indexPage: number) {
    console.log(indexPage);
    this.selectedPage = indexPage;

    this.parentPage.lstHumansByDimensionsPaged = new Array<HumansByDimensionsViewModel>();
    return this.parentPage.listHumansByDimensions.map((x, index) => {
      console.log("index:", index)
      if (index === (indexPage * 2) - 2 || index === (((indexPage * 2) - 1))) {
        console.log("entrou")
        this.parentPage.lstHumansByDimensionsPaged.push(x);
      }
    })

  }


}
