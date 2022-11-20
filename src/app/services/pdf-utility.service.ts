import { Injectable } from '@angular/core';
import { Buffer } from 'buffer';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PdfUtilityService {

  private _pdfData: string = '';
  base64Prefix = 'data:application/pdf;base64,';

  today$ = new Subject<string>();
  constructor() { }

  getPdfData() {
    // 將 base64 中的前綴刪去，並進行解碼
    return this._pdfData;
  }

  setDdfData(pdfData: string) {
    this._pdfData = pdfData;
    localStorage.setItem('pdfData', pdfData);
  }

  readBlob(blob: Blob) {
    return new Promise<string | ArrayBuffer | null>((resolve, reject) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => resolve(reader.result));
      reader.addEventListener('error', reject);
      reader.readAsDataURL(blob);
    });
  }

  addDate() {
    const now = new Date();
    const format = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`;
    this.today$.next(format);
  }

}
