import { Component, input, signal } from "@angular/core";
import { StructureDetail } from "../structures/structures.model";

@Component({
  selector: 'app-logs',
  standalone: true,
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.css',
  imports: []
})
export class LogsComponent {
  structure = input.required<StructureDetail>();
}
