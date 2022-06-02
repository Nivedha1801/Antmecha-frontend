import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import fetch from 'node-fetch';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  projectDetails: any;
  taskDetails: any;
  constructor(private http: HttpClient) {}
  async getProjectDetails() {
    let res = await fetch('http://localhost:3000/clickup/project-card');

    this.projectDetails = await res.json();
    return this.projectDetails;
  }
  async getOverDueTasks() {
    let res = await fetch('http://localhost:3000/clickup/overdue-card');

    this.taskDetails = await res.json();
    return this.taskDetails;
  }
  async getTaskStatus() {
    let res = await fetch('http://localhost:3000/clickup/status-card');
    return res.json();
  }
  async getDealines() {
    let res = await fetch('http://localhost:3000/clickup/upcoming-card');
    return res.json();
  }
  async getPriority() {
    let res = await fetch('http://localhost:3000/clickup/priority-card');
    return res.json();
  }
  async getWorkload() {
    let res = await fetch('http://localhost:3000/clickup/workload');
    return res.json();
  }
  async getOLE() {
    let res = await fetch('http://localhost:3000/clickup/oledepartment');
    return res.json();
  }
}
