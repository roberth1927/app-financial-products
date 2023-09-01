import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-buttom',
  templateUrl: './custom-buttom.component.html',
  styleUrls: ['./custom-buttom.component.css']
})
export class CustomButtomComponent {
  @Input() label!: string;
  @Input() type!: string;
  @Input() disabled!: boolean;
  @Input() class: string = '';
}
