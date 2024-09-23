import { Component, inject, OnInit } from '@angular/core';
import { StructuresService } from './structure.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-structures',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './structures.component.html',
  styleUrl: './structures.component.css'
})
export class StructuresComponent implements OnInit {
  structures: any;

  private structuresService = inject(StructuresService);

  ngOnInit(): void {
    this.structuresService.getStructures().subscribe(
      response => this.structures = response,
      error => console.error('Error fetching data:', error)
    );
  }
}
