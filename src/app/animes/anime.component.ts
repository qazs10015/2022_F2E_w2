import { DialogService } from './../services/dialog.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { Router } from '@angular/router';
import { DialogConfigModel } from '../interfaces/DialogConfigModel';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit, OnChanges {

  @Input() dialogConfig: any;
  displayText = '上傳中...'

  options: AnimationOptions = {
    path: environment.baseUrl + '/assets/animations/signLoading.json',
  };

  constructor(private router: Router, private dialogService: DialogService) { }

  animationCreated(animationItem: AnimationItem): void {
    // this.ani = animationItem;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const dialogConfig = changes['dialogConfig'].currentValue;
    // 如果顯示，兩秒後關閉 dialog
    if (dialogConfig.isShow) {
      setTimeout(() => {
        this.dialogService.dismissDialog();
      }, 2500);
    }

    this.displayText = dialogConfig.displayText;

    this.options = {
      ...this.options, // In case you have other properties that you want to copy
      path: `${environment.baseUrl}/assets/animations/${dialogConfig.animationName}.json`,
    };

  }

}
