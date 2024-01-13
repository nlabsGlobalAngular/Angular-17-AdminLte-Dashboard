import { Component } from '@angular/core';
import { BlanpageComponent } from '../../ui/common/blank/blankpage.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BlanpageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
