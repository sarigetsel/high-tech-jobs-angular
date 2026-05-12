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
