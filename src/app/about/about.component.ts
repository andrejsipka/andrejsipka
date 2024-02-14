import {Component, inject} from "@angular/core";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import ProjectListComponent from "../home/ui/project-list.component";
import FooterComponent from "../shared/ui/footer.component";
import ExperienceService from "./services/experience.service";
import ExperienceCardComponent from "./ui/experience-card.component";

@Component({
  standalone: true,
  selector: 'app-about',
  imports: [
    NgOptimizedImage,
    RouterLink,
    ProjectListComponent,
    FooterComponent,
    ExperienceCardComponent
  ],
  templateUrl: 'about.component.html',
  styleUrl: 'about.component.scss'
})
export default class AboutComponent {
  experienceService: ExperienceService = inject(ExperienceService);
}