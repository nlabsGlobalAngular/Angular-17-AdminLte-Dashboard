import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blank',
  standalone: true,
  imports: [],
  templateUrl: './blankpage.component.html',
  styleUrl: './blankpage.component.css'
})
export class BlankComponent {
  @Input() title: string = "";
  @Input() address1: string = "";

}
