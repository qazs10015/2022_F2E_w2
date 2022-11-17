import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DialogConfigModel } from '../interfaces/DialogConfigModel';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  defaultConfig: DialogConfigModel = { isShow: false, displayText: '上傳中...', animationName: 'signLoading' }

  dialogConfig$ = new BehaviorSubject<DialogConfigModel>(this.defaultConfig);
  constructor() { }

  showDialog(defaultConfig: DialogConfigModel) {
    this.dialogConfig$.next({ ...defaultConfig, isShow: true });
  }

  dismissDialog() {
    this.dialogConfig$.next({ ...this.defaultConfig, isShow: false });
  }
}
