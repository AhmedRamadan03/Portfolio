import { Component, OnInit } from '@angular/core';
import { faPhone, faMailBulk, faMapLocation } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contant',
  templateUrl: './contant.component.html',
  styleUrls: ['./contant.component.css']
})
export class ContantComponent implements OnInit {

  faPhone       = faPhone;
  faMapLocation   = faMapLocation;
  faMailBulk    = faMailBulk;
  constructor() { }

  ngOnInit(): void {
  }

}
