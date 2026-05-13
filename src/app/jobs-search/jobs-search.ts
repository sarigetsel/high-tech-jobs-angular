import { Component, inject, NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JobsService } from '../shared/jobs.service';
import { JobItem } from '../job-item/job-item';

@Component({
  selector: 'app-jobs-search',
  standalone: true,
  imports: [FormsModule, JobItem],
  templateUrl: './jobs-search.html',
  styleUrl: './jobs-search.css',
})
export class JobsSearch {

  private jobsService = inject(JobsService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  searchText = '';

  jobs = this.jobsService.getJobs;

  filteredJobs() {
    const text = this.searchText.toLowerCase();

    return this.jobs().filter(job =>
      job.Description.toLowerCase().includes(text)
    );
  }

  onSearchChange() {
    this.router.navigate([], {
      queryParams: { q: this.searchText }
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchText = params['q'] || '';
    });
  }
}
