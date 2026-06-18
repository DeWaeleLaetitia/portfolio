import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from '../nav/nav.component';
import { ProjectComponent } from '../project/project.component';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-projects',
  standalone: true,
  imports: [CommonModule, NavComponent, ProjectComponent, RouterModule],
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss']
})
export class AllProjectsComponent implements OnInit {
  projectService: ProjectService = inject(ProjectService);
  projectList: Project[] = [];
  isLoading = true;

  ngOnInit(): void {
    this.projectService.getAllProjects()
      .then(projects => {
        this.projectList = projects;
        this.isLoading = false;
      })
      .catch(err => {
        console.error('Failed to load projects', err);
        this.isLoading = false;
      });
  }
}
