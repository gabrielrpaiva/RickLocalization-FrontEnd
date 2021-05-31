import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { HumanDetailComponent } from "./human-detail/human-detail.component";

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'human-detail/:id', component: HumanDetailComponent}
];
