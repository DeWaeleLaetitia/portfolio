import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Project } from "../project";
import { RouterModule } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-project",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"],
})
export class ProjectComponent {
  @Input() project!: Project;
  imageLoaded = false;
  constructor(private router: Router) {
  }
  
  onImageLoad() {
  this.imageLoaded = true;
}

  get isWorkPage(): boolean {
    return this.router.url === "/work";
  }
}
