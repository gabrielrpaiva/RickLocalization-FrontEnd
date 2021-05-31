import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginationCardsComponent } from '../components/pagination-cards.component';
import HumansByDimensionsViewModel from '../models/humans-by-dimensions.view-model';
import { HumansByDimensionsService } from '../services/humans-by-dimensions.service';
import { BancoViewModel } from './BancoViewModel';

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
  banco: BancoViewModel = new BancoViewModel({});
  selectedPage: number = 1;
  pageIndex: number = 1;


  ngOnInit() {

  }

  ngAfterViewInit() {


    this.humansByDimensionsService.getByDimension(0).toPromise().then((data: Array<HumansByDimensionsViewModel>) => {

      this.listHumansByDimensions = data;
      this.lstHumansByDimensionsPaged = this.listHumansByDimensions.slice(0, 2);

      this.paginationCardsComponent.startedPagination(this);
    })

  }


  /* classnumber(index: number): string {
    console.log("classnumber: " , index);
    console.log("selectedPage: " , this.selectedPage);
    if (this.selectedPage === index) {
      return "page-link selected";
    }

    return "page-link";
  } */

  // changePage(index: number) {
  //  console.log("changePage")
  //  this.selectedPage = index;
  //  this.lstBancoPaged = new Array<BancoViewModel>();
  //  this.paginateMap(index);

  /*   let sliceFrom = 0;
    let sliceTo = 2;
    if (index > 2) {
      sliceFrom = index;
      sliceTo = index + 2;
    } */

  //this.lstBancoPaged = this.lstBanco.slice((index - 1) * 2, index * 2);
  // let pages = this.paginate(5);
  // console.log(pages)    // all pages
  // console.log(pages[1]) // second page
  //}

  /* paginateMap(indexPage: number) {
    this.lstBancoPaged = new Array<BancoViewModel>();
    return this.lstBanco.map((x, index) => {
      if (index === (indexPage * 2) - 2 || index === (((indexPage * 2) - 1))) {
        this.lstBancoPaged.push(x);
      }
    })
  } */


}
