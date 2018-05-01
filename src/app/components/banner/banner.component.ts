import {Component, Input, OnInit} from '@angular/core';
import {AppData} from '../../model/appInterface';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() bannerData: AppData = <AppData>{};

  constructor() { }

  ngOnInit() {
  }

}
