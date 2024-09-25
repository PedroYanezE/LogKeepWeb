import { Component, inject, OnInit, output } from '@angular/core';
import { StructuresService } from './structure.service';
import { StructureDetail, StructureList } from './structures.model';

@Component({
  selector: 'app-structures',
  standalone: true,
  templateUrl: './structures.component.html',
  styleUrl: './structures.component.css',
  imports: [
    
  ]
})
export class StructuresComponent implements OnInit {
  structures: any;
  select = output<StructureDetail>();

  private structuresService = inject(StructuresService);

  ngOnInit(): void {
    this.structuresService.getStructures().subscribe({
      next: (response: any) => this.structures = response,
      error: (error: any) => console.error('Error fetching data:', error)
    });
  }

  selectStructure(selectedStructureId: string) {
    this.structuresService.getStructureById(selectedStructureId).subscribe({
      next: (response: any) => this.select.emit(response),
      error: (error: any) => console.error('Error fetching data:', error)
    });
  }
}
