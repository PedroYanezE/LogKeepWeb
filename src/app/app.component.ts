import { Component } from '@angular/core';
import { StructuresComponent } from './structures/structures.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    StructuresComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LogKeepWeb';
}
