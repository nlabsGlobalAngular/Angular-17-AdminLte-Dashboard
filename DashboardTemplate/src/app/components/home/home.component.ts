import { Component } from '@angular/core';
import { BlankComponent } from '../../ui/common/blank/blankpage.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BlankComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
