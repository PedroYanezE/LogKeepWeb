import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class StructuresService {
    private http = inject(HttpClient);

    getStructures(): Observable<any> {
        return this.http.get('https://localhost:7066/api/Structures');
    }

    getStructureById(structureId: string): Observable<any> {
        return this.http.get(`https://localhost:7066/api/Structures/${structureId}`);
    }
}
