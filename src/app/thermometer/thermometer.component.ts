import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['./thermometer.component.scss']
})
export class ThermometerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() height: any
  @Input() percent: ''
  @Input() size: ''
  @Input() temp:any
  

}
