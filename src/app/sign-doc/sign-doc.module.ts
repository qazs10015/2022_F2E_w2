import { RouterModule } from '@angular/router';
import { SignDocComponent } from './sign-doc.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PreviewDocComponent } from './preview-doc/preview-doc.component';
import { CreateSignComponent } from './create-sign/create-sign.component';
import { SignDocRoutingModule } from './sign-doc-routing.module';



@NgModule({
  declarations: [SignDocComponent, PreviewDocComponent, CreateSignComponent],
  imports: [
    CommonModule,
    PdfViewerModule,
    RouterModule,
    SignDocRoutingModule
  ]
})
export class SignDocModule { }
