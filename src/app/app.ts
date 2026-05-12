import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobsList } from './jobs-list/jobs-list';
import { JobsService } from './shared/jobs.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JobsList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('High-techJobs');

constructor(public jobService: JobsService) {}
}