import { PdfUtilityService } from './../../services/pdf-utility.service';
import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { fabric } from 'fabric';
enum ChooseSignMethod {
  CREATE,
  IMPORT
}

enum ChooseColorSolid {
  BLACK = 'black',
  BLUE = 'blue',
  RED = 'red'
}

@Component({
  selector: 'app-create-sign',
  templateUrl: './create-sign.component.html',
  styleUrls: ['./create-sign.component.scss']
})
export class CreateSignComponent implements OnInit, AfterViewInit {

  canvas: fabric.Canvas = {} as any;

  chooseSignMethod = ChooseSignMethod;

  currentSignMethod = ChooseSignMethod.CREATE;

  chooseColorSolid = ChooseColorSolid
  currentColorSolid = ChooseColorSolid.BLACK;

  isPainting = false;

  constructor(private router: Router, private pdfUtilityService: PdfUtilityService) { }
  ngAfterViewInit(): void {
    // 取得畫布元素
    this.canvas = new fabric.Canvas('canvas');
    // 筆刷寬度
    this.canvas.freeDrawingBrush.width = 1.5;
    // 開啟自由繪畫模式
    this.canvas.isDrawingMode = true;
    // 設定寬度
    // this.canvas.setWidth('90vw', { cssOnly: true });
    // 設定高度
    this.canvas.setHeight('60vh', { cssOnly: true });
  }

  ngOnInit(): void {

  }

  createSignToImage() {
    localStorage.setItem('signData', this.canvas.toDataURL());
    this.router.navigateByUrl('/signDoc/previewDoc');
  }

  clearCanvas() {
    this.canvas.clear();
  }

  changeSignMethod(signMethod: ChooseSignMethod) {
    this.currentSignMethod = signMethod;
    switch (signMethod) {
      case ChooseSignMethod.CREATE:
        this.canvas.isDrawingMode = true;
        break;

      case ChooseSignMethod.IMPORT:
        this.canvas.isDrawingMode = false;
        break;

    }
  }



  async onUpload(event: any) {

    const blob = await this.pdfUtilityService.readBlob(event.target.files[0]);
    fabric.Image.fromURL(blob as string, (img) => {
      this.canvas.add(img);
      this.canvas.renderAll();
    });

  }

  changeColorSolid(colorSolid: ChooseColorSolid) {
    this.currentColorSolid = colorSolid;

    // 設定筆刷顏色
    this.canvas.freeDrawingBrush.color = colorSolid;
  }

}
