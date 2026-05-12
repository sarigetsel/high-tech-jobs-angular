import { Component, input } from '@angular/core';
import { Job } from '../shared/job';
import { JobItem } from '../jobs/job-item/job-item';

@Component({
  selector: 'app-jobs-list',
  imports: [JobItem],
  templateUrl: './jobs-list.html',
  styleUrl: './jobs-list.css',
})
export class JobsList {
   jobs = input<Job[]>();
}
