import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DialogConfigModel } from './interfaces/DialogConfigModel';
import { DialogService } from './services/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '2022F2E_w2';

  dialogConfig$: BehaviorSubject<DialogConfigModel> = new BehaviorSubject<DialogConfigModel>(this.dialogService.defaultConfig);

  constructor(private dialogService: DialogService) {
    this.dialogConfig$ = this.dialogService.dialogConfig$;

  }
}
