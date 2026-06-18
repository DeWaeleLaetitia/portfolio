import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectList: Project[] = [];
  private projectPromise: Promise<Project[]>;

  constructor() {
    this.projectPromise = this.loadProjects();
  }

  private loadProjects(): Promise<Project[]> {
    return fetch('assets/projects.json')
      .then(res => res.json())
      .then((data: Project[]) => {
        this.projectList = data;
        return data;
      })
      .catch(err => {
        console.error('Failed to load projects.json', err);
        return [] as Project[];
      });
  }

  getAllProjects(): Promise<Project[]> {
    return this.projectList.length ? Promise.resolve([...this.projectList]) : this.projectPromise.then(data => [...data]);
  }

  getProjectById(id: string): Promise<Project | undefined> {
    return this.getAllProjects().then(projects => projects.find(project => project.id === id));
  }
}
