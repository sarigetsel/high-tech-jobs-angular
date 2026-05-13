import { Injectable, signal } from '@angular/core';
import { Job } from './job';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  #jobs = signal<Job[]>([
  {
    id: 1,
    Description: 'Frontend developer with Angular experience',
    company: 'Google',
    location: 'Tel Aviv',
    salary: '25000'
  },
  {
    id: 2,
    Description: 'Backend developer with Node.js',
    company: 'Amazon',
    location: 'Haifa',
    salary: '27000'
  },
  {
    id: 3,
    Description: 'Full Stack Developer (Angular + .NET)',
    company: 'Microsoft',
    location: 'Herzliya',
    salary: '30000'
  },
  {
    id: 4,
    Description: 'React Frontend Developer',
    company: 'Meta',
    location: 'Tel Aviv',
    salary: '28000'
  },
  {
    id: 5,
    Description: 'Mobile Developer (Flutter)',
    company: 'Wix',
    location: 'Tel Aviv',
    salary: '24000'
  },
  {
    id: 6,
    Description: 'DevOps Engineer (AWS)',
    company: 'Intel',
    location: 'Haifa',
    salary: '32000'
  },
  {
    id: 7,
    Description: 'Software Engineer - Python Backend',
    company: 'Apple',
    location: 'Remote',
    salary: '35000'
  }
])

getJobs = this.#jobs.asReadonly();

  addJob(job:Job){
     this.#jobs.update(current => [...current,job]);
  }
  getJobById(id:number):Job | undefined{
    return this.#jobs().find(job => job.id === id)
  }
}
