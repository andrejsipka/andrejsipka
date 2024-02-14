import {ChangeDetectionStrategy, Component, input} from "@angular/core";
import {NgOptimizedImage} from "@angular/common";
import {Project} from "../../shared/types/types";

@Component({
  selector: 'app-project-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="grid">
      @for (project of projects(); track project.id) {
        <a [attr.href]="project.url" target="_blank">
          <article class="card">
            <div class="card__img-container">
              <img [ngSrc]="project.thumbnail" fill priority [attr.alt]="project.title" class="card__img">
            </div>

            <header class="card__header">
              <h1 class="heading heading__tertriary">{{ project.title }}</h1>

              <div class="badge badge--primary">
                <span>{{project.year}}</span>
              </div>
            </header>

            <div class="card__badges">
              @for(tag of project.tags; track tag.id) {
                <div class="badge badge--outlined">
                  <span>{{tag.label}}</span>
                </div>
              }
            </div>

            <p class="text text__regular">{{ project.description }}</p>
          </article>
        </a>
      }
    </div>
  `,
  imports: [
    NgOptimizedImage
  ],
  styles: `
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      grid-auto-rows: auto;
      gap: 3.6rem;
    }

    .card {
      width: 100%;
      cursor: pointer;

      &__img-container {
        width: 100%;
        height: 300px;
        background-color: lightgrey;
        position: relative;
        overflow: hidden;
        border-radius: var(--radius);
      }
      
      &__img {
        object-fit: cover;
        object-position: center top;
        transform: scale(1.01);
        transition: transform 300ms ease;
      }
      
      &:hover &__img {
        transform: scale(1.03);
      }
      
      &__header {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem;
      }
      
      &__badges {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      }

      & > *:not(:last-child) {
        margin-bottom: 1rem;
      }
    }
  `
})
export default class ProjectListComponent {
  projects = input<Project[]>([], {
    alias: 'projects'
  })
}