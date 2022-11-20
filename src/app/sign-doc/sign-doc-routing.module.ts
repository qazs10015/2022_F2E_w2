import { SignDocComponent } from './sign-doc.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSignComponent } from './create-sign/create-sign.component';
import { PreviewDocComponent } from './preview-doc/preview-doc.component';
const routes: Routes = [
  {
    path: '',
    component: SignDocComponent,
    children: [
      { path: 'previewDoc', component: PreviewDocComponent },
      { path: 'createSign', component: CreateSignComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignDocRoutingModule { }
