import { Component, input } from '@angular/core';
import { Job } from '../../shared/job';

@Component({
  selector: 'app-job-item',
  imports: [],
  templateUrl: './job-item.html',
  styleUrl: './job-item.css',
})
export class JobItem {
   job = input<Job>();
}
