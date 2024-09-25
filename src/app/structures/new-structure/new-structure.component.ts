import { Component, OnInit, signal } from '@angular/core';
import { Field } from '../structures.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-structure',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-structure.component.html',
  styleUrl: './new-structure.component.css'
})
export class NewStructureComponent {
  fields = signal<Field[]>([]);
  newFieldName = '';

  isCreatingField = false;

  createField() {
    this.isCreatingField = true;
  }

  addField() {
    this.fields.set(this.fields().concat({
      name: this.newFieldName,
      dataType: "string"
    }));

    this.newFieldName = '';
    this.isCreatingField = false;
  }

  removeField(name: string) {
    this.fields.set(this.fields().filter(field => field.name !== name));
  }
}
