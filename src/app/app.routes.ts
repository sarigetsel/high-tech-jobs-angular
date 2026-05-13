import { Routes } from '@angular/router';
import { Login } from './login/login';
import { authGuard } from './shared/auth-guard';

export const routes: Routes = [
     {
    path: '',
    component: Login,
     title: 'דף הבית'
  },
{

  path: 'job-search',
  canActivate: [authGuard],
  loadComponent: () =>
    import('./jobs-search/jobs-search').then(m => m.JobsSearch),
  title: 'חיפוש משרות'
},

  {
    path: 'all-jobs',
    loadComponent: () =>
      import('./jobs-list/jobs-list').then((c) => c.JobsList),
      title: 'כל המשרות'
  },
  {
  path: 'job-details/:id',
  loadComponent: () =>
    import('./job-details/job-details').then(m => m.JobDetails),
  title: 'פרטי משרה'
},
  {
    path: '**', 
    redirectTo: 'all-jobs',
  },
];
