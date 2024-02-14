import {Component, inject} from "@angular/core";
import {RouterLink} from "@angular/router";
import ProjectService from "./services/project.service";
import {NgOptimizedImage} from "@angular/common";
import ProjectListComponent from "./ui/project-list.component";
import FooterComponent from "../shared/ui/footer.component";

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    RouterLink,
    NgOptimizedImage,
    ProjectListComponent,
    FooterComponent
  ],
  templateUrl: 'home.component.html',
  styleUrl: 'home.component.scss'
})
export default class HomeComponent {
  projectService: ProjectService = inject(ProjectService);
}
