import {AuthGuard} from './auth.guard'
import {NgModule} from '@angular/core'
import {PreloadAllModules, RouterModule, Routes} from '@angular/router'

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'on-boarding',
  //   pathMatch: 'full',
  // },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./sign-up/sign-up.module').then((m) => m.SignUpPageModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'on-boarding',
    loadChildren: () =>
      import('./on-boarding/on-boarding.module').then((m) => m.OnBoardingPageModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordPageModule,
      ),
  },
  {
    path: 'on-boarding-level',
    loadChildren: () =>
      import('./on-boarding/on-boarding-level/on-boarding-level.module').then(
        (m) => m.OnBoardingLevelPageModule,
      ),
  },
  {
    path: 'on-boarding-language',
    loadChildren: () =>
      import('./on-boarding/on-boarding-language/on-boarding-language.module').then(
        (m) => m.OnBoardingLanguagePageModule,
      ),
  },
  {
    path: 'on-boarding-reminder',
    loadChildren: () =>
      import('./on-boarding/on-boarding-reminder/on-boarding-reminder.module').then(
        (m) => m.OnBoardingReminderPageModule,
      ),
  },
  {
    path: 'lesson-details/:subLessonId/:isCompleted/:isDraft',
    loadChildren: () =>
      import('./dashboard/lessons/lesson-details/lesson-details.module').then(
        (m) => m.LessonDetailsPageModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'lesson-steps/:subLessonId/:isDraft',
    pathMatch: 'prefix',
    loadChildren: () =>
      import('./dashboard/lessons/lesson-details/lesson-steps/lesson-steps.module').then(
        (m) => m.LessonStepsPageModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'lesson-complete',
    loadChildren: () =>
      import(
        './dashboard/lessons/lesson-details/lesson-complete/lesson-complete.module'
      ).then((m) => m.LessonCompletePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'payment/manage',
    loadChildren: () =>
      import(
        './dashboard/user-profile/setting/account/subscription-plans/stripe-manage/stripe-manage.module'
      ).then((m) => m.StripeManagePageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'payment/:productId',
    loadChildren: () =>
      import(
        './dashboard/user-profile/setting/account/subscription-plans/stripe-payment/stripe-payment.module'
      ).then((m) => m.StripePaymentPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'popular',
    loadChildren: () =>
      import('./dashboard/lessons/popular-lessons/popular-lessons.module').then(
        (m) => m.PopularLessonsPageModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'new-uploads',
    loadChildren: () =>
      import('./dashboard/lessons/new-uploads/new-uploads.module').then(
        (m) => m.NewUploadsPageModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'draft-lessons',
    loadChildren: () =>
      import('./dashboard/lessons/draft-lessons/draft-lessons.module').then(
        (m) => m.DraftLessonsPageModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'saved-lessons',
    loadChildren: () =>
      import('./dashboard/lessons/saved-lessons/saved-lessons.module').then(
        (m) => m.SavedLessonsPageModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path:
      'search-list/:suggestedCurriculumId/:suggestedCurriculumTitle/:suggestedCurriculumDay',
    loadChildren: () =>
      import('./dashboard/search-lessons/search-list/search-list.module').then(
        (m) => m.SearchListPageModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'my-courses',
    loadChildren: () =>
      import('./dashboard/lessons/my-courses/my-courses.module').then(
        (m) => m.MyCoursesPageModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'course-details/:lessonId/:type',
    loadChildren: () =>
      import('./dashboard/lessons/my-courses/course-details/course-details.module').then(
        (m) => m.CourseDetailsPageModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'setting',
    loadChildren: () =>
      import('./dashboard/user-profile/setting/setting.module').then(
        (m) => m.SettingPageModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./dashboard/user-profile/setting/account/account.module').then(
        (m) => m.AccountPageModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-email',
    loadChildren: () =>
      import(
        './dashboard/user-profile/setting/account/edit-email/edit-email.module'
      ).then((m) => m.EditEmailPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-name',
    loadChildren: () =>
      import('./dashboard/user-profile/setting/account/edit-name/edit-name.module').then(
        (m) => m.EditNamePageModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-password',
    loadChildren: () =>
      import(
        './dashboard/user-profile/setting/account/edit-password/edit-password.module'
      ).then((m) => m.EditPasswordPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'reminder',
    loadChildren: () =>
      import('./dashboard/user-profile/setting/reminder/reminder.module').then(
        (m) => m.ReminderPageModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'delete-account',
    loadChildren: () =>
      import(
        './dashboard/user-profile/setting/account/delete-account/delete-account.module'
      ).then((m) => m.DeleteAccountPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'support',
    loadChildren: () =>
      import('./dashboard/user-profile/setting/support/support.module').then(
        (m) => m.SupportPageModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'language',
    loadChildren: () =>
      import('./dashboard/user-profile/setting/account/language/language.module').then(
        (m) => m.LanguagePageModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'share-app',
    loadChildren: () =>
      import('./dashboard/user-profile/setting/share-app/share-app.module').then(
        (m) => m.ShareAppPageModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'app-info',
    loadChildren: () =>
      import('./dashboard/user-profile/setting/app-info/app-info.module').then(
        (m) => m.AppInfoPageModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'subscription',
    pathMatch: 'full',
    loadChildren: () =>
      import(
        './dashboard/user-profile/setting/account/subscription/subscription.module'
      ).then((m) => m.SubscriptionPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'subscriptionplans',
    loadChildren: () =>
      import(
        './dashboard/user-profile/setting/account/subscription-plans/subscription-plans.module'
      ).then((m) => m.SubscriptionPlansPageModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'faqs/:type',
    loadChildren: () =>
      import('././dashboard/user-profile/setting/support/faqs/faqs.module').then(
        (m) => m.FaqsPageModule,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'email-the-team',
    loadChildren: () =>
      import(
        '././dashboard/user-profile/setting/support/email-the-team/email-the-team.module'
      ).then((m) => m.EmailTheTeamPageModule),
    canActivate: [AuthGuard],
  },
  {path: '**', redirectTo: ''},
]
@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
