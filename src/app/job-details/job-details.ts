import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../shared/jobs.service';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [],
  templateUrl: './job-details.html',
  styleUrl: './job-details.css'
})
export class JobDetails {

  private route = inject(ActivatedRoute);
  private jobsService = inject(JobsService);

  job = this.jobsService.getJobById(
  Number(this.route.snapshot.paramMap.get('id'))
  );
}