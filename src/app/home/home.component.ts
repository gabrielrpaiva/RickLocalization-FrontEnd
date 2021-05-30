import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { PaginationCardsComponent } from '../components/pagination-cards.component';
import { HumansByDimensionsService } from '../services/humans-by-dimensions.service';
import { BancoViewModel } from './BancoViewModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})


export class HomeComponent implements OnInit, AfterViewInit {

@ViewChild(PaginationCardsComponent, { static: true }) paginationCardsComponent: PaginationCardsComponent;

constructor(private humansByDimensionsService: HumansByDimensionsService) { }

  lstBanco: Array<BancoViewModel> = new Array<BancoViewModel>();
  lstBancoPaged: Array<BancoViewModel> = new Array<BancoViewModel>();
  banco: BancoViewModel = new BancoViewModel({});
  selectedPage: number = 1;



  ngOnInit() {

    //https://images-na.ssl-images-amazon.com/images/I/91MteSqsrJL.jpg

    /// PAGE 1 ( 0,2 )
    this.banco.image = "";
    this.banco.tiulo = "Item 0";
    this.lstBanco.push(this.banco);
    this.banco = new BancoViewModel({});

    this.banco.image = "";
    this.banco.tiulo = "Item 1";
    this.lstBanco.push(this.banco);
    this.banco = new BancoViewModel({});

    /// PAGE 2 (2,4)
    this.banco.image = "";
    this.banco.tiulo = "Item 2";
    this.lstBanco.push(this.banco);
    this.banco = new BancoViewModel({});

    this.banco.image = "";
    this.banco.tiulo = "Item 3";
    this.lstBanco.push(this.banco);
    this.banco = new BancoViewModel({});

    /// PAGE 3 (4,6)
    this.banco.image = "";
    this.banco.tiulo = "Item 4";
    this.lstBanco.push(this.banco);
    this.banco = new BancoViewModel({});


    this.banco.image = "";
    this.banco.tiulo = "Item 5";
    this.lstBanco.push(this.banco);
    this.banco = new BancoViewModel({});


    /// PAGE 4 (6,8)
    this.banco.image = "";
    this.banco.tiulo = "Item 6";
    this.lstBanco.push(this.banco);
    this.banco = new BancoViewModel({});


    this.banco.image = "";
    this.banco.tiulo = "Item 7";
    this.lstBanco.push(this.banco);
    this.banco = new BancoViewModel({});


    /// PAGE 5 (8,10)
    this.banco.image = "";
    this.banco.tiulo = "Item 8";
    this.lstBanco.push(this.banco);
    this.banco = new BancoViewModel({});


    this.banco.image = "";
    this.banco.tiulo = "Item 9";
    this.lstBanco.push(this.banco);
    this.banco = new BancoViewModel({});


    this.banco.image = "";
    this.banco.tiulo = "Item 10";
    this.lstBanco.push(this.banco);
    this.banco = new BancoViewModel({});
    //console.log(this.lstBanco)

    this.lstBancoPaged = this.lstBanco.slice(0, 2);
    //this.paginate(2)
    //this.paginateMap(3);
    //console.log(Math.ceil(13/2));
    //console.log(this.lstBancoPaged);
  }

  ngAfterViewInit() {


   this.humansByDimensionsService.getByDimension(0).toPromise().then((data)=>{
    console.log("data");
    /*  this.persons = data.data.personObjects;
     console.log(this.persons); */
   })
    this.paginationCardsComponent.startedPagination(this);
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
