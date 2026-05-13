import { Component, input } from '@angular/core';
import { Job } from '../shared/job';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-job-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './job-item.html',
  styleUrl: './job-item.css',
})
export class JobItem {
   job = input.required<Job>();
}

