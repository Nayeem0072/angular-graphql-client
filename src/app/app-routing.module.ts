import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AuthorsComponent} from "./authors/authors.component";
import {GauthorComponent} from "./gauthor/gauthor.component";
import {ExchangeRatesComponent} from "./exchange-rates/exchange-rates.component";
import {ProfileComponent} from "./profile/profile.component";
import {FeedComponent} from "./feed/feed.component";

const routes: Routes = [
  { path: 'authors', component: AuthorsComponent },
  { path: 'gauthors', component: GauthorComponent },
  { path: 'exchange-rates', component: ExchangeRatesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'feed', component: FeedComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
