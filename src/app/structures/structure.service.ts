import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class StructuresService {
    constructor(private http: HttpClient) { }

    getStructures(): Observable<any> {
        return this.http.get('https://localhost:7066/api/Structures');
    }
}
