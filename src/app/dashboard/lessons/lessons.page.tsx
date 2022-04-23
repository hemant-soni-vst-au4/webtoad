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
import {
  IonButton,
  IonCol,
  IonGrid,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonSkeletonText,
  IonText,
  IonThumbnail,
  isPlatform,
} from '@ionic/react'
import Driver from 'driver.js'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import AppProvider from 'src/reactapp/AppProvider'
import {
  DashboardLessonFieldsFragment,
  LessonFieldsFragment,
  useGetDashboardDraftLessonsQuery,
  useGetDashboardQuery,
  useGetProfileQuery,
  usePopularLessonsQuery,
} from 'src/reactapp/types-and-hooks'
import {useStore} from 'src/reactapp/useStore'
import useFetch, {CachePolicies} from 'use-http'
import {SharedService} from './../../services/shared.service'

function getThumnailUrl(youtubeId) {
  return `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`
}
function fixVideoLevel(videoLevel) {
  return videoLevel === 'Elementary' ? 'Upper-beginner' : videoLevel
}

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const Section: React.FC = ({children}) => {
  return (
    <IonRow className="ion-justify-content-center ion-padding-start ion-padding-end ion-padding-top ion-padding-bottom">
      <IonCol
        sizeXs="12"
        sizeSm="12"
        sizeMd="10"
        sizeLg="9"
        sizeXl="8"
        className="ion-align-self-center"
      >
        {children}
      </IonCol>
    </IonRow>
  )
}

function TodayLessonView({onClick, thumbnail, lessonName, videoLevel, videoType}) {
  return (
    <IonRow
      className="pointer today-lesson lesson pt-0 ion-justify-content-center"
      onClick={onClick}
    >
      <IonCol
        className="ion-align-self-center"
        sizeXs="6"
        sizeSm="6"
        sizeMd="4"
        sizeLg="4"
        sizeXl="3"
      >
        <IonThumbnail>
          <IonImg src={thumbnail} style={{width: '100%'}}></IonImg>
        </IonThumbnail>
      </IonCol>
      <IonCol
        className="ion-align-self-center"
        sizeXs="6"
        sizeSm="6"
        sizeMd="8"
        sizeLg="8"
        sizeXl="9"
      >
        <h5 className="video-title mt-0 ">{lessonName}</h5>

        <IonText color="medium">
          {videoLevel && <h6 className="video-category-label">{videoLevel}</h6>}
          {videoType && <h6 className="video-category-label">{videoType}</h6>}
        </IonText>
      </IonCol>
    </IonRow>
  )
}

const TodayLesson: React.FC<{
  loading: boolean
  todaysLesson: Partial<DashboardLessonFieldsFragment>
}> = ({loading, todaysLesson}) => {
  const navCtrl = useStore((state) => state.navController)

  if (loading) {
    return (
      <TodayLessonView
        thumbnail="../../../assets/images/thumbnail-youtube.jpg"
        lessonName={
          <>
            <IonSkeletonText
              animated
              style={{width: '100%', height: 19}}
            ></IonSkeletonText>
          </>
        }
        videoLevel={<IonSkeletonText animated style={{width: '50%'}}></IonSkeletonText>}
        videoType={<IonSkeletonText animated style={{width: '40%'}}></IonSkeletonText>}
        onClick={() => {}}
      />
    )
  }

  return todaysLesson ? (
    <TodayLessonView
      thumbnail={getThumnailUrl(todaysLesson.youtubeId)}
      lessonName={todaysLesson.lessonName}
      videoLevel={todaysLesson.videoLevelLabel}
      videoType={todaysLesson.videoType}
      onClick={() => {
        navCtrl.navigateForward(['/lesson-details', todaysLesson._id, false, false])
      }}
    />
  ) : (
    <TodayLessonView
      thumbnail="../../../assets/images/movie.svg"
      lessonName={
        <>
          <strong>Good job!</strong> You've studied all the lessons prepared in 'Business
          English'. Feel free to explore other lessons.
        </>
      }
      videoLevel={null}
      videoType={null}
      onClick={() => {}}
    />
  )
}

function MyCourseItem({thumbnail, title, desc, onClick = null}) {
  return (
    <IonItem
      lines="none"
      mode="md"
      onClick={(e) => {
        e.preventDefault()
        onClick && onClick(e)
      }}
      // className="pointer"
      routerLink={`link`} // for hover effect
    >
      <IonThumbnail slot="start">
        <IonImg src={thumbnail}></IonImg>
      </IonThumbnail>
      <IonLabel>
        <h2 className="ion-text-wrap">{title}</h2>
        <IonText color="medium">{desc}</IonText>
      </IonLabel>
    </IonItem>
  )
}
function MyCourseLoadingItem() {
  return (
    <MyCourseItem
      title={
        <>
          <IonSkeletonText animated style={{width: '80%'}}></IonSkeletonText>
        </>
      }
      thumbnail="../../../../assets/images/thumbnail-youtube.jpg"
      desc={
        <>
          <p>
            <IonSkeletonText animated style={{width: '40%'}}></IonSkeletonText>
          </p>
          <p>
            <IonSkeletonText animated style={{width: '30%'}}></IonSkeletonText>
          </p>
        </>
      }
    />
  )
}

function MyCourses({loading, myCourses = []}) {
  const navCtrl = useStore((state) => state.navController)

  if (loading) {
    return (
      <IonList mode="md" className="ion-no-padding">
        <MyCourseLoadingItem />
        <MyCourseLoadingItem />
        <MyCourseLoadingItem />
      </IonList>
    )
  }
  if (myCourses.length === 0) {
    return null
  }

  return (
    <>
      <IonList
        mode="md"
        className="ion-no-padding"
        // list="none"
      >
        {myCourses.map((myCourse) => (
          <MyCourseItem
            key={myCourse._id}
            onClick={() => {
              navCtrl.navigateForward(['/course-details', myCourse._id, 'myCourse'])
            }}
            title={myCourse.title || myCourse.introduction}
            thumbnail={getThumnailUrl(myCourse.youtubeId)}
            desc={
              <>
                <p>
                  <IonText>
                    {myCourse?.lessonCount === 1
                      ? 'Single -'
                      : `${myCourse?.lessonCount} episode - `}
                  </IonText>
                  {myCourse.videoLevelLabel}
                </p>
                <p>{myCourse.topicTitle}</p>
              </>
            }
          />
        ))}
      </IonList>
    </>
  )
}

function HorizontalLessonLoadingItem() {
  return (
    <li className="pointer ion-activatable">
      <IonThumbnail>
        <IonImg
          style={{width: '100%'}}
          src="../../../assets/images/thumbnail-youtube.jpg"
        ></IonImg>
      </IonThumbnail>
      <h5 className=" mt-0">
        <IonSkeletonText animated style={{width: '90%'}}></IonSkeletonText>
        <IonSkeletonText animated style={{width: '30%'}}></IonSkeletonText>
      </h5>
      <IonText color="medium">
        <h6 className="video-category-label">
          <IonSkeletonText animated style={{width: '40%'}}></IonSkeletonText>
        </h6>
        <h6 className="video-category-label">
          <IonSkeletonText animated style={{width: '40%'}}></IonSkeletonText>
        </h6>
      </IonText>
      {/* <IonRippleEffect></IonRippleEffect> */}
    </li>
  )
}

function ShareNow() {
  const navCtrl = useStore((state) => state.navController)
  return (
    <IonRow className="pro-package-bg ion-justify-content-center ion-align-items-center">
      <IonCol
        className="ion-no-padding ion-align-self-center"
        sizeXs="12"
        sizeSm="12"
        sizeMd="7"
        sizeLg="6"
        sizeXl="4"
      >
        <h1 className="ion-no-margin ion-text-center">
          Help your friends learn English!
        </h1>
        <img src="/assets/images/share-now.svg" alt="share" />
        <IonButton
          className="btn-share-now"
          mode="ios"
          // color="danger"
          shape="round"
          expand="block"
          onClick={() => {
            navCtrl.navigateForward('/share-app')
          }}
          // routerLink="/share-app"
        >
          <strong>SHARE NOW</strong>
        </IonButton>
      </IonCol>
    </IonRow>
  )
}
function SubscribeNow() {
  const navCtrl = useStore((state) => state.navController)
  const {
    data: {profile},
  } = useGetProfileQuery()
  // console.log({profile})
  if (profile?.currentPackage === 'Subscription') {
    return null
  }
  return (
    <IonRow className="trial-package-bg ion-justify-content-center ion-align-items-center">
      <IonCol
        size-xs="12"
        size-sm="12"
        size-md="7"
        size-lg="6"
        size-xl="4"
        className="ion-no-padding ion-align-self-center"
      >
        <h1 className="ion-no-margin ion-text-center">Unlock your potential now!</h1>
        <img src="../../../assets/images/subscribe-now-bg.png" alt="share" />
        <IonButton
          mode="ios"
          color="danger"
          shape="round"
          expand="block"
          onClick={() => {
            navCtrl.navigateForward('/subscriptionplans')
          }}
        >
          <strong>SUBSCRIBE NOW</strong>
        </IonButton>
      </IonCol>
    </IonRow>
  )
}

function HorizontalLessonList({loading, lessons, isDraft = false}) {
  const navCtrl = useStore((state) => state.navController)
  if (loading) {
    return (
      <ul>
        <HorizontalLessonLoadingItem />
        <HorizontalLessonLoadingItem />
        <HorizontalLessonLoadingItem />
      </ul>
    )
  }
  return (
    <>
      <ul
      // className="hz-list"
      >
        {lessons.map((lesson) => (
          <li
            key={lesson._id}
            className="pointer ion-activatable"
            // className="hover-pointer ion-activatable ripple-parent"
            onClick={() =>
              navCtrl.navigateForward(`/lesson-details/${lesson._id}/false/${isDraft}`)
            }
          >
            <IonThumbnail>
              <IonImg
                style={{width: '100%'}}
                src={getThumnailUrl(lesson.youtubeId)}
              ></IonImg>
            </IonThumbnail>
            <h5 className="video-title mt-0">{lesson.lessonName}</h5>
            <IonText color="medium">
              <h6 className="video-category-label">
                {fixVideoLevel(lesson.videoLevelLabel)}
              </h6>
              <h6 className="video-category-label">{lesson.videoType}</h6>
            </IonText>
            {/* <IonRippleEffect></IonRippleEffect> */}
          </li>
        ))}
      </ul>
    </>
  )
}

const DraftLessonsSection: React.FC = () => {
  const navCtrl = useStore((state) => state.navController)
  const {data, loading, error} = useGetDashboardDraftLessonsQuery({
    fetchPolicy: 'network-only',
    // pollInterval: 2000,
  })

  return (
    <Section>
      <IonRow>
        <IonCol>
          <h3 className="mt-0 font-weight-400">
            <strong>Draft Lessons</strong>
          </h3>
        </IonCol>
        <IonCol>
          <IonText
            color="danger"
            className="ion-float-right pointer"
            onClick={() => {
              navCtrl.navigateForward('/draft-lessons')
            }}
          >
            See All
          </IonText>
        </IonCol>
      </IonRow>
      <HorizontalLessonList
        loading={loading}
        lessons={data?.draftLessons?.data}
        isDraft
      />
    </Section>
  )
}

type Props = {
  ts: number
}

const RLessonsPage: React.FC<Props> = ({ts}) => {
  const today = weekdays[new Date(ts).getDay()]
  const {
    data: {profile},
  } = useGetProfileQuery()
  const dashboardRes = useGetDashboardQuery({
    variables: {
      day: today === 'Saturday' || today === 'Sunday' ? 'Weekend' : today,
      videoLevel: profile.userLevelName,
    },
    fetchPolicy: 'cache-and-network',
  })
  const {data, loading, error, refetch} = dashboardRes
  const navCtrl = useStore((state) => state.navController)
  const sharedService = useStore((state) => state.sharedService)
  // console.log({data, loading})
  const isLoading = !data && loading

  React.useEffect(() => {
    // refetch()
    console.log('useEffect')
  }, [ts])

  async function handleHelpGuide() {
    console.log('handleHelpGuide')
    const helpLog = await sharedService.getNativeStorage('isTodayLessonHelpModeDone')
    console.log(helpLog)
    if (helpLog?.data) {
      return
    }
    const steps = [
      {
        element: '#today-lesson',
        popover: {
          title: 'Recommendation',
          description:
            'We recommend a new lesson each day based on your level and from different categories.',
          position: 'bottom',
        },
      },
    ]

    if (document.getElementById('my-course')) {
      steps.push({
        element: '#my-course',
        popover: {
          title: 'My Course',
          description: "Lessons you've started but not completed yet.",
          position: 'top',
        },
      })
    }

    showHelpGuide({
      steps,
      onClose: () => {
        sharedService.setNativeStorage('isTodayLessonHelpModeDone', true)
      },
    })
  }

  React.useEffect(() => {
    // console.log({loading})
    if (!loading) {
      handleHelpGuide()
    }
  }, [loading])

  return (
    <IonGrid className="lessons-page ion-no-padding">
      {isPlatform('mobile') && (
        <IonRow className="ion-justify-content-center">
          <IonCol
            className="ion-align-self-center ion-padding"
            sizeXs="4"
            sizeSm="4"
            sizeLg="2"
            sizeMd="3"
            sizeXl="1"
          >
            <img src="/assets/images/logo.png" width="65%" className="logo" />
          </IonCol>
        </IonRow>
      )}

      <Section>
        {isPlatform('desktop') && <div className="ion-margin-top"></div>}
        <h2 id="today-lesson" className="ion-no-margin todaysLessonsHeading">
          <strong>Study Today's Lesson For You</strong>
        </h2>
        <p className="c-medium m-5">
          <strong>Recommendation</strong>
        </p>
        <TodayLesson loading={isLoading} todaysLesson={data?.todayLesson} />
      </Section>
      {data?.myCourses?.length > 0 && <hr />}
      <Section>
        <IonRow>
          <IonCol>
            <h3 id="my-course" className="mt-0 font-weight-400">
              <strong>My Courses</strong>
            </h3>
          </IonCol>
          <IonCol>
            <IonText
              color="danger"
              className="ion-float-right pointer"
              onClick={() => {
                navCtrl.navigateForward('/my-courses')
              }}
            >
              See All
            </IonText>
          </IonCol>
        </IonRow>
        <MyCourses loading={isLoading} myCourses={data?.myCourses} />
      </Section>
      <hr />
      <Section>
        <IonRow>
          <IonCol>
            <h3 className="mt-0 font-weight-400">
              <strong>Saved For Later</strong>
            </h3>
          </IonCol>
          <IonCol>
            <IonText
              color="danger"
              className="ion-float-right pointer"
              onClick={() => {
                navCtrl.navigateForward('/saved-lessons')
              }}
            >
              See All
            </IonText>
          </IonCol>
        </IonRow>
        <HorizontalLessonList loading={isLoading} lessons={data?.savedLessons?.data} />
      </Section>
      <ShareNow />
      <Section>
        <IonRow>
          <IonCol size="auto">
            <h3 className="mt-0 font-weight-400">
              <strong>Popular Lessons</strong>
            </h3>
          </IonCol>
          <IonCol>
            <IonText
              color="danger"
              className="ion-float-right pointer"
              onClick={() => {
                navCtrl.navigateForward('/popular')
              }}
            >
              See All
            </IonText>
          </IonCol>
        </IonRow>
        <HorizontalLessonList loading={isLoading} lessons={data?.popularLessons?.data} />
      </Section>
      <hr />
      <Section>
        <IonRow>
          <IonCol>
            <h3 className="mt-0 font-weight-400">
              <strong>New Uploads</strong>
            </h3>
          </IonCol>
          <IonCol>
            <IonText
              color="danger"
              className="ion-float-right pointer"
              onClick={() => {
                navCtrl.navigateForward('/new-uploads')
              }}
            >
              See All
            </IonText>
          </IonCol>
        </IonRow>
        <HorizontalLessonList
          loading={isLoading}
          lessons={data?.newUploadLessons?.data}
        />
      </Section>
      <hr />
      {profile.isAdmin && <DraftLessonsSection />}
      <SubscribeNow />
      {/* <Box h="60px"></Box> */}
    </IonGrid>
  )
}

function showHelpGuide({steps, onClose}) {
  setTimeout(() => {
    const driver = new Driver({
      // animate: false, // Whether to animate or not
      // opacity: 0,
      allowClose: false, // Whether the click on overlay should close or not
      overlayClickNext: true, // Whether the click on overlay should move next
      doneBtnText: 'Done', // Text on the final button
      closeBtnText: 'Skip', // Text on the close button for this step
      // stageBackground: '#ffffff', // Background color for the staged behind highlighted element
      nextBtnText: 'Next', // Next button text for this step
      prevBtnText: 'Previous', // Previous button text for this step
      keyboardControl: false, // Allow controlling through keyboard (escape to close, arrow keys to move)
      // onNext: (Element) => {},
      onHighlightStarted: (Element) => {
        const node = Element.getNode() as HTMLElement
        node.scrollIntoView(false)
      },
      onDeselected: (Element) => {
        console.log('onDeselected')
        if (!driver.isActivated) {
          onClose()
        }
      },
    })

    driver.defineSteps(steps)

    driver.start()
  }, 1000)
}

const containerElementName = 'rcLessons'

@Component({
  selector: 'app-lessons',
  template:
    '<ion-content #ionContent class="help-container"><div #rcLessons></div></ion-content>',
  styleUrls: ['./lessons.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LessonsPage implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @ViewChild(containerElementName, {static: false}) containerRef: ElementRef
  ts = +new Date()

  constructor(
    public sharedService: SharedService, // public router: Router,
  ) {
    console.log('constructor')
    this.sharedService.gaTrackView('Dashboard Screen')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes})
    this.render()
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit')
    this.render()
  }

  ngOnDestroy() {
    unmountComponentAtNode(this.containerRef.nativeElement)
  }

  private render() {
    if (this.containerRef) {
      render(
        <AppProvider>
          <RLessonsPage ts={this.ts} />
        </AppProvider>,
        this.containerRef.nativeElement,
      )
    }
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter')
    this.ts = +new Date()
    this.render()
  }

  ngOnInit() {}

  ionViewWillLeave() {
    console.log('ionViewWillLeave')
    this.sharedService.setNativeStorage('isTodayLessonHelpModeDone', true)
  }
}
