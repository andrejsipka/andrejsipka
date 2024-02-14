import {inject, Injectable, signal} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {Project} from "../../shared/types/types";

@Injectable({
  providedIn: 'root',
})
export default class ExperienceService {
  private http: HttpClient = inject(HttpClient);

  workExperience = signal<any[]>([]);
  education = signal<any[]>([]);

  constructor() {
    this.getWorkExperience().subscribe({
      next: (data) => {
        this.workExperience.set(data);
      }
    });

    this.getEducation().subscribe({
      next: (data) => {
        this.education.set(data);
      }
    });
  }

  getWorkExperience() :Observable<any[]> {
    return this.http.get<Project[]>('/assets/data/work.json').pipe(
      takeUntilDestroyed()
    );
  }

  getEducation() :Observable<any> {
    return this.http.get<Project[]>('/assets/data/education.json').pipe(
      takeUntilDestroyed()
    );
  }
}