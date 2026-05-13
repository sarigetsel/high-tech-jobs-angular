import { Component, inject } from '@angular/core';
import { JobItem } from '../job-item/job-item';
import { JobsService } from '../shared/jobs.service';

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [JobItem],
  templateUrl: './jobs-list.html',
  styleUrl: './jobs-list.css',
})
export class JobsList {

  private jobsService = inject(JobsService);

  jobs = this.jobsService.getJobs;
}