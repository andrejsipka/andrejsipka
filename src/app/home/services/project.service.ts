import {inject, Injectable, signal} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {Project} from "../../shared/types/types";

@Injectable({
    providedIn: 'root',
})
export default class ProjectService {
    private http: HttpClient = inject(HttpClient);

    projects = signal<Project[]>([]);

    constructor() {
        this.getProjects().subscribe({
            next: (data) => {
                this.projects.set(data);
            }
        })
    }

    getProjects() :Observable<Project[]> {
        return this.http.get<Project[]>('/assets/data/projects.json').pipe(
            takeUntilDestroyed()
        );
    }
}