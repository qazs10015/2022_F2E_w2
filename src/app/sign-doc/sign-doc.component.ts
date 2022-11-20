import { PdfUtilityService } from './../services/pdf-utility.service';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
enum FuncList {
  SIGN,
  CHECK,
  DATE,
  TEXT,
  PREVIEW
};

@Component({
  selector: 'app-sign-doc',
  templateUrl: './sign-doc.component.html',
  styleUrls: ['./sign-doc.component.scss']
})
export class SignDocComponent implements OnInit {
  funcList = FuncList;
  currentFunc = FuncList.PREVIEW;

  constructor(private pdfUtilityService: PdfUtilityService, private router: Router) { }

  ngOnInit(): void {
    // 利用解碼的檔案，載入 PDF 檔及第一頁
    // this.pdfSrc = this.pdfUtilityService.getPdfData();
    // const pdfDoc = await pdfjsLib.getDocument({ data }).promise;
    // const pdfPage = await pdfDoc.getPage(1);
  }


  signFuncs(funcName: FuncList) {
    this.currentFunc = funcName;
    switch (funcName) {
      case FuncList.PREVIEW:
        this.router.navigateByUrl('/signDoc/previewDoc');
        break;
      case FuncList.SIGN:
        this.router.navigateByUrl('/signDoc/createSign');
        break;

      case FuncList.CHECK:

        break;
      case FuncList.DATE:
        this.pdfUtilityService.addDate();
        break;
      case FuncList.TEXT:

        break;
    }
  }


}
