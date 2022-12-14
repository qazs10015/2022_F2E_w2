import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  // { path: 'signDoc', component: SignDocComponent },
  {
    path: 'signDoc',
    loadChildren: () => import('./sign-doc/sign-doc.module').then(m => m.SignDocModule)
  },
  { path: 'history', component: HistoryComponent },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

