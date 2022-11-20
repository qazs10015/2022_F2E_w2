import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  // { path: 'signDoc', component: SignDocComponent },
  {
    path: 'signDoc',
    loadChildren: () => import('./sign-doc/sign-doc.module').then(m => m.SignDocModule)
  },
  { path: 'history', component: HistoryComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

