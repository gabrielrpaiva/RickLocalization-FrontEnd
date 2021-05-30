import { Component, Input } from '@angular/core';
import { BancoViewModel } from '../home/BancoViewModel';
import { HomeComponent } from '../home/home.component';
import { HumansByDimensionsService } from '../services/humans-by-dimensions.service';

@Component({
  selector: 'app-pagination-cards',
  templateUrl: './pagination-cards.component.html',
  styleUrls: ['./pagination-cards.component.css']

})


export class PaginationCardsComponent {

  constructor(private humansByDimensionsService: HumansByDimensionsService) { }

  lstBanco: Array<BancoViewModel> = new Array<BancoViewModel>();

  parentPage: HomeComponent = new HomeComponent(this.humansByDimensionsService);
  lstBancoPaged: Array<BancoViewModel> = new Array<BancoViewModel>();
  banco: BancoViewModel = new BancoViewModel({});
  selectedPage: number = 1;
  totalPages: number = 0;
  ngOnInit() {

  }

  startedPagination(parent: HomeComponent) {
   this.parentPage = parent;
   this.totalPages = Math.ceil(this.parentPage.lstBanco.length / 2);
  }


  changeClassSelectedPage(index: number): string {
    if (this.selectedPage === index) {
      return "page-link selected";
    }

    return "page-link";
  }

  changePage(indexPage: number) {

    this.selectedPage = indexPage;

   this.parentPage.lstBancoPaged = new Array<BancoViewModel>();
    return this.parentPage.lstBanco.map((x, index) => {
      if (index === (indexPage * 2) - 2 || index === (((indexPage * 2) - 1))) {
        this.parentPage.lstBancoPaged.push(x);
      }
    })
  }


}
