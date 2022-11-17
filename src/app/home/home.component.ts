import { DialogService } from './../services/dialog.service';

import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private maxFileSize = Math.pow(1024, 3);
  constructor(private dialogService: DialogService) { }

  ngOnInit(): void {

  }


  onUpload(event: any) {

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
      var reader = new FileReader();
      reader.onload = (e) => {
        const pdfData = e.target?.result as string;
        localStorage.setItem('pdfData', pdfData);
        // 確認儲存後導頁至簽名頁
        // this.dialogService.showDialog({ ...this.dialogService.defaultConfig });
      };
      reader.readAsDataURL(event.target.files[0]);

    }



  }

}
