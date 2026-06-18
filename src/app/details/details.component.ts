import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { NavComponent } from '../nav/nav.component';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule, NavComponent],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  route: ActivatedRoute = inject(ActivatedRoute);

  projectService: ProjectService = inject(ProjectService);
  projectId = '';
  project: Project | null = null;
  isLoading = true;
  notFound = false;

  constructor(  private titleService: Title, private location: Location
) {}
  
goBack(): void {
  this.location.back();
}

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('id') ?? '';

    if (this.projectId) {
      const title = this.projectId.charAt(0).toUpperCase() + this.projectId.slice(1);
      this.titleService.setTitle(title);
    }

    if (!this.projectId) {
      this.notFound = true;
      this.isLoading = false;
      return;
    }

    this.projectService.getProjectById(this.projectId)
      .then(project => {
        this.project = project ?? null;
        this.notFound = !this.project;
        this.isLoading = false;
      })
      .catch(err => {
        console.error('Failed to load project', err);
        this.notFound = true;
        this.isLoading = false;
      });
  }
}
