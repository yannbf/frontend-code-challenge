import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

declare const $: any;
@Component({
  selector: 'app-advertisement-list-item',
  templateUrl: './advertisement-list-item.component.html',
  styleUrls: ['./advertisement-list-item.component.scss'],
})
export class AdvertisementListItemComponent implements AfterViewInit {
  @Input() advertisement;

  ngAfterViewInit() {
    $(document).ready(function() {
      $('.materialboxed').materialbox();
    });
  }
}
