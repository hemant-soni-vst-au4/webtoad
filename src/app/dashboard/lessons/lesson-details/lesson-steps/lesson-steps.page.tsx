import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router'
import {AlertController, NavController} from '@ionic/angular'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AppProvider from 'src/reactapp/AppProvider'
import RLessonStepsPage from 'src/reactapp/pages/lessonSteps/LessonStepsPage'
import {SharedService} from './../../../../services/shared.service'
// import {ScenesPopoverComponent} from './scenes-popover/scenes-popover.component'
// import {StepsPopoverComponent} from './steps-popover/steps-popover.component'
// import '../../../../../reactapp/pages/lessonSteps/LessonStepsPage.scss'

delete (window as any).Hammer.defaults.cssProps.userSelect

// Sentry.init({
//   dsn: 'https://01711b0158cb4cb0933f572b35a02f01@o507769.ingest.sentry.io/5599313',
//   integrations: [new Integrations.BrowserTracing()],
//   tracesSampleRate: 1.0,
//   maxBreadcrumbs: 1,
// })

function LessonStepsApp() {
  return (
    <AppProvider>
      {/* <ChakraProvider> */}
      <BrowserRouter
      // basename="/lesson-steps"
      >
        <Switch>
          <Route
            path="/lesson-steps/:subLessonId/:isDraft"
            exact={false}
            component={RLessonStepsPage}
          />
          {/* <Redirect from="/" to="/s1" /> */}
        </Switch>
      </BrowserRouter>
      {/* </ChakraProvider> */}
    </AppProvider>
  )
}

const containerElementName = 'rcLessonSteps'

@Component({
  selector: 'app-lesson-steps',
  template: `<div #${containerElementName}></div>`,
  styleUrls: [
    '../../../../../reactapp/pages/lessonSteps/LessonStepsPage.scss',
    '../comments/Comments.scss',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class LessonStepsPage implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @ViewChild(containerElementName, {static: false}) containerRef: ElementRef

  isLoaded: boolean = false

  dictationPlayCount = 0
  reviewingPlayCount = 0
  practicePlayCount = 0

  subLessonId

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private alertController: AlertController,
    private navController: NavController,
  ) {
    // window['platform'] = platform
    // console.log(platform.is())

    this.sharedService.gaTrackView('Lesson Steps Screen')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes})
    this.render()
  }

  ngAfterViewInit() {
    this.render()
  }

  ngOnDestroy() {
    console.log('destory')
    ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement)
  }

  private render() {
    if (this.containerRef) {
      ReactDOM.render(<LessonStepsApp />, this.containerRef.nativeElement)
    }
  }

  ngOnInit() {
    this.route.params.subscribe(async (params) => {
      try {
        const subLessonId = params.subLessonId
        if (!subLessonId) {
          throw new Error('No SubLessonId')
        }
        console.log({params})
        this.subLessonId = subLessonId
        const isDraft = JSON.parse(params.isDraft)
        this.isLoaded = false
        // this.setCompletedRepetitionFalse()
        // await this.loadDatas(subLessonId, isDraft)
      } catch (error) {
        this.showAlertAndExit(error)
      }
    })
  }

  showAlertAndExit(error) {
    this.alertController
      .create({
        header: 'Alert!',
        message: error,
        buttons: [
          {
            text: 'OK',
            handler: () => {
              console.log('Confirm Okay')
              this.router.navigate(['/dashboard/lessons'])
              this.navController.setDirection('root')
            },
          },
        ],
      })
      .then((alert) => alert.present())
  }

  back() {
    this.navController.pop()
  }
}
