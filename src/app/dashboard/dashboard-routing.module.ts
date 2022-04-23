import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {DashboardPage} from './dashboard.page'

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'lessons',
        loadChildren: () =>
          import('./lessons/lessons.module').then((m) => m.LessonsPageModule),
      },
      {
        path: 'search-lessons',
        loadChildren: () =>
          import('./search-lessons/search-lessons.module').then(
            (m) => m.SearchLessonsPageModule,
          ),
      },
      {
        path: 'review',
        loadChildren: () =>
          import('./review/review.module').then((m) => m.ReviewPageModule),
      },
      {
        path: 'review/:isCompleted',
        loadChildren: () =>
          import('./review/review.module').then((m) => m.ReviewPageModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./user-profile/user-profile.module').then(
            (m) => m.UserProfilePageModule,
          ),
      },
      {
        path: '',
        redirectTo: '/dashboard/lessons',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/dashboard/lessons',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule {}
