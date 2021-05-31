import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { PaginationCardsComponent } from './components/pagination-cards.component';
import {HumansByDimensionsService} from '../app/services/humans-by-dimensions.service'
import { HttpClientModule } from '@angular/common/http';
import { HumanDetailComponent } from './human-detail/human-detail.component';
import { TravelHistoryComponent } from './travel-history/travel-history.component';
import { DimensionService } from './services/dimension.service';
import { TravelComponent } from './travel/travel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PaginationCardsComponent,
    HumanDetailComponent,
    TravelHistoryComponent,
    TravelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatPaginatorModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})]
  ],
  providers: [
    HumansByDimensionsService,
    DimensionService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
