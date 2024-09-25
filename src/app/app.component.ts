import { Component } from '@angular/core';
import { StructuresComponent } from './structures/structures.component';
import { LogsComponent } from './logs/logs.component';
import { StructureDetail } from './structures/structures.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LogsComponent,
    StructuresComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedStructure?: StructureDetail;

  onSelectStructure(structure: StructureDetail) {
    this.selectedStructure = structure;
  }
}
