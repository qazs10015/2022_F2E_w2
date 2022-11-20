import { PdfUtilityService } from './../../services/pdf-utility.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { fabric } from 'fabric';
import { Observable, Subject, takeUntil } from 'rxjs';
import jsPDF from 'jspdf';
import { DialogService } from 'src/app/services/dialog.service';
import { Router } from '@angular/router';
enum FuncList {
  SIGN,
  CHECK,
  DATE,
  TEXT,
  NONE
};

enum TurnPageAction {
  PREVIOUS,
  NEXT
}
@Component({
  selector: 'app-preview-doc',
  templateUrl: './preview-doc.component.html',
  styleUrls: ['./preview-doc.component.scss']
})
export class PreviewDocComponent implements OnInit, OnDestroy {


  canvas: fabric.Canvas = {} as any;
  pdfSrc = '';
  // pdfSrc = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf'
  pageIdx = 1;
  pageCount = 0;

  turnPageAction = TurnPageAction;

  imgData = '';

  destroy$ = new Subject();

  constructor(private pdfUtilityService: PdfUtilityService, private dialogService: DialogService, private router: Router) { }

  async ngOnInit() {
    this.pdfSrc = localStorage.getItem('pdfData')!;
    this.canvas = new fabric.Canvas('canvas');

    this.pdfUtilityService.today$.pipe(takeUntil(this.destroy$)).subscribe((today) =>
      this.canvas.add(new fabric.Textbox(today)))
    // this.canvas.setWidth(300);
    // this.canvas.setHeight(600);


    // const doc = new jsPDF();
    // doc.
    // const imageData = localStorage.getItem('signData');
    // doc.loadFile(localStorage.getItem('pdfData')!);
    // doc.text("Hello world!", 10, 10);
    // doc.addImage(imageData!, "JPEG", 15, 40, 40, 40);
    // doc.save("a4.pdf");

  }

  ngOnDestroy(): void {
    this.destroy$.next(false);
  }

  async printPDF(pdfDocument: any) {
    const pdfPage = await pdfDocument!.getPage(1)
    const viewport = pdfPage!.getViewport({ scale: 0.7 });
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // Render PDF page into canvas context
    const renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    const renderTask = pdfPage.render(renderContext);
    return renderTask.promise.then(() => canvas);
  }

  async pageInitialized(event: any) {
    const pdfObj = event.source;
    // 簽名功能目前只支援1頁
    this.pageCount = 1;
    // this.pageCount = pdfObj.pagesCount;
  }

  async afterLoadComplete(event: any) {
    const pdfData = await this.printPDF(event);
    // console.log(pdfData);

    fabric.Image.fromURL(pdfData.toDataURL(), (img) => {
      this.canvas.setWidth(img.width!)
      this.canvas.setHeight(img.height!)
      this.canvas.setBackgroundImage(img, () => { });
    });

    setTimeout(() => {
      fabric.Image.fromURL(localStorage.getItem('signData')!, (img) => {
        img.top = 400;
        img.scaleX = 0.7;
        img.scaleY = 0.7;
        this.canvas.add(img);
        this.canvas.renderAll();
      });
    }, 1000);
  }





  /** 換頁 */
  turnPage(turnPage: TurnPageAction) {
    switch (turnPage) {
      case TurnPageAction.PREVIOUS:
        this.pageIdx = this.pageIdx === 1 ? 1 : this.pageIdx - 1;
        break;

      case TurnPageAction.NEXT:
        this.pageIdx = this.pageIdx === this.pageCount ? this.pageCount : this.pageIdx + 1;
        break;

    }
  }


  async savePDF() {
    const pdf = new jsPDF();
    var image = this.canvas.toDataURL();
    pdf.addImage(image, 'JPEG', 0, 0, pdf.internal.pageSize.width, pdf.internal.pageSize.height);
    pdf.save('test.pdf');

    const config = this.dialogService.defaultConfig;
    config.animationName = 'ok';
    config.displayText = '簽署完成';

    this.dialogService.showDialog({ ...this.dialogService.defaultConfig });
    this.dialogService.dialogConfig$.subscribe(() => {
      localStorage.setItem('pdfData', '');
      this.router.navigateByUrl('');
    });

  }


}
