import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-advertisement-list-item',
  templateUrl: './advertisement-list-item.component.html',
  styleUrls: ['./advertisement-list-item.component.scss'],
})
export class AdvertisementListItemComponent {
  @Input() advertisement;
}
