import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-advertisement-list',
  templateUrl: './advertisement-list.component.html',
  styleUrls: ['./advertisement-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementListComponent implements OnInit {
  @Input() advertisements;
  @Input() isLoading;
  @Input() error;
  constructor() {}

  ngOnInit() {}
}
