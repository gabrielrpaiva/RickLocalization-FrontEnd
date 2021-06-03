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
  showPages = 4;
  registersPerPage = 2;
  ngOnInit() { }

  startedPagination(parent: HomeComponent) {
    this.parentPage = parent;
    this.parentPage.lstHumansByDimensionsPaged = this.parentPage.listHumansByDimensions.slice(0, this.registersPerPage);
    this.totalPages = Math.ceil(this.parentPage.listHumansByDimensions.length / this.registersPerPage);

    this.totalPagesArray = Array(this.totalPages).fill(this.totalPages).map((x, i) => i);
    this.totalPagesArray = this.totalPagesArray.slice(0, this.showPages);
  }
  changeClassSelectedPage(index: number): string {
    if (this.selectedPage === index) {
      return "page-link selected";
    }
    return "page-link";
  }

  changePage(indexPage: number) {
    this.selectedPage = indexPage;
    this.alterPages();
  }

  previusPage() {
    if (this.selectedPage - 1 === this.totalPagesArray[0]) {
      this.totalPagesArray = Array(this.totalPages).fill(this.totalPages).map((x, i) => i);
      this.totalPagesArray = this.totalPagesArray.slice(this.selectedPage - 2, this.selectedPage + (this.showPages - 2));
    }
    this.selectedPage = this.selectedPage - 1;
    this.alterPages();
  }

  nextPage() {
    if (this.selectedPage === this.totalPagesArray[this.totalPagesArray.length - 1] + 1) {
      this.totalPagesArray = Array(this.totalPages).fill(this.totalPages).map((x, i) => i);
      this.totalPagesArray = this.totalPagesArray.slice(this.selectedPage - (this.showPages - 1), this.selectedPage + 1);
    }
    this.selectedPage = this.selectedPage + 1;
    this.alterPages();
  }

  alterPages() {
    this.parentPage.lstHumansByDimensionsPaged = new Array<HumansByDimensionsViewModel>();
    let stop = 0;
    return this.parentPage.listHumansByDimensions.map((x, index) => {
      if (index >= ((this.selectedPage * this.registersPerPage) - this.registersPerPage)  ) {
         if (this.registersPerPage !== stop) {
          this.parentPage.lstHumansByDimensionsPaged.push(x);
          stop++;
         }
      }
    })
  }

  enableNextPage() {
    const allData = Array(this.totalPages).fill(this.totalPages).map((x, i) => i);
    if (this.selectedPage === (allData[allData.length - 1] + 1)) {
      return "page-item disabled";
    }
    return "page-item";
  }

  enablePreviusPage(): string {
    const allData = Array(this.totalPages).fill(this.totalPages).map((x, i) => i);
    if (this.selectedPage === (allData[0] + 1)) {
      return "page-item disabled";
    }
    return "page-item";
  }
}
