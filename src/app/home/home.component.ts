import { PdfUtilityService } from './../services/pdf-utility.service';
import { DialogService } from './../services/dialog.service';

import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private maxFileSize = Math.pow(1024, 3);
  constructor(private dialogService: DialogService, private pdfUtilityService: PdfUtilityService, private router: Router) { }

  ngOnInit(): void {

  }


  async onUpload(event: any) {

    const currentFileSize = (event.target.files[0] as File).size;
    if (currentFileSize > this.maxFileSize) {
      Swal.fire({
        title: '檔案超過10MB，請重新選擇',
        customClass: {
          title: 'alertTitle',
          confirmButton: 'alertConfirmButton'
        }
      });
    } else {
      const pdfData = await this.pdfUtilityService.readBlob(event.target.files[0]);
      this.pdfUtilityService.setDdfData(pdfData as string);
      // 確認儲存後導頁至簽名頁
      this.dialogService.showDialog({ ...this.dialogService.defaultConfig });
      this.dialogService.dialogConfig$.subscribe(() => {
        this.router.navigateByUrl('/signDoc/previewDoc');
      });
    }
  }

}
