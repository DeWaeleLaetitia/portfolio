import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { NavComponent } from '../nav/nav.component';
import { ProjectComponent } from '../project/project.component';
import { Project } from '../project';
import { TimelineComponent } from '../timeline/timeline.component';
import { ContactComponent } from '../contact/contact.component';
import { RouterModule } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, NavComponent, ProjectComponent, TimelineComponent, ContactComponent, RouterModule],
  template: `
    <app-nav></app-nav>
    <app-header></app-header>
    <div class="projects py-l d-flex flex-column align-items-center">
      <app-project *ngFor="let project of highlightedProjectList" [project]="project"></app-project>
        <a routerLink="/work" class="btn">View All My Work</a>
    </div>
    <app-timeline id="experience"></app-timeline>
    <app-contact id="contact"></app-contact>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  projectService: ProjectService = inject(ProjectService);
  projectList: Project[] = [];
  highlightedProjectList: Project[] = [];

  ngOnInit(): void {
    this.projectService.getAllProjects()
      .then(projects => {
        this.projectList = projects;
        this.highlightedProjectList = projects.filter(project => project.highlighted);
      })
      .catch(err => console.error('Failed to load projects', err));
  }
}
