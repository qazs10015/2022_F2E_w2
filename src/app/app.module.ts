import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LottieCacheModule, LottieModule } from 'ngx-lottie';
import { AnimeComponent } from './animes/anime.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

import { SignDocModule } from './sign-doc/sign-doc.module';


// run json animation
export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HistoryComponent,
    AnimeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SignDocModule,
    LottieModule.forRoot({ player: playerFactory }),
    LottieCacheModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
