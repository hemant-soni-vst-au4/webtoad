import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import {SharedService} from './../../../services/shared.service'
import {ActivatedRoute} from '@angular/router'
import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  SimpleChanges,
  ElementRef,
  OnChanges,
  AfterViewInit,
  ViewEncapsulation,
} from '@angular/core'
import AppProvider from 'src/reactapp/AppProvider'
import {
  IonAlert,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonProgressBar,
  IonRippleEffect,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonSkeletonText,
  IonSpinner,
  IonText,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from '@ionic/react'
import {chevronBack, play} from 'ionicons/icons'
import ReactPlayer from 'react-player'
import {Comments} from 'src/app/dashboard/lessons/lesson-details/comments/Comments'

import {useProfile, useStore} from 'src/reactapp/useStore'
import {
  Lesson,
  useAddToMyLessonMutation,
  useGetLessonDeatilQuery,
  useGetProfileLazyQuery,
  useGetProfileQuery,
  useSetLessonSavedMutation,
} from 'src/reactapp/types-and-hooks'
import clsx from 'clsx'

const Introduction = ({lessonDetails}) => {
  const navCtrl = useStore((state) => state.navController)
  const isLoading = lessonDetails === undefined
  if (isLoading) {
    return (
      <>
        <IonRow className="ion-align-items-center ion-justify-content-center">
          <IonCol size="12" className="ion-align-self-center">
            <h6 className="lesson-heading">Introduction</h6>
            <div>
              <IonSkeletonText animated style={{width: '100%'}}></IonSkeletonText>
              <IonSkeletonText animated style={{width: '100%'}}></IonSkeletonText>
              <IonSkeletonText animated style={{width: '80%'}}></IonSkeletonText>
            </div>
          </IonCol>
        </IonRow>
        <IonRow className="ion-align-items-center ion-justify-content-center">
          <IonCol size="12" className="ion-align-self-center">
            <div>
              <IonSkeletonText animated style={{width: '100%'}}></IonSkeletonText>
            </div>
          </IonCol>
        </IonRow>
        <IonRow className="ion-align-items-center ion-justify-content-center">
          <IonCol size="12" className="ion-align-self-center">
            <h6 className="lesson-heading">Level</h6>
            <div>
              <IonSkeletonText animated style={{width: '40%'}}></IonSkeletonText>
            </div>
          </IonCol>
        </IonRow>
        <IonRow className="ion-align-items-center ion-justify-content-center">
          <IonCol size="12" className="ion-align-self-center">
            <h6 className="lesson-heading">Number of Scenes</h6>
            <div>
              <IonSkeletonText animated style={{width: '40%'}}></IonSkeletonText>
            </div>
          </IonCol>
        </IonRow>

        <IonRow className="ion-align-items-center ion-justify-content-center">
          <IonCol size="12" className="ion-align-self-center">
            <div>
              <IonSkeletonText animated style={{width: '40%'}}></IonSkeletonText>
            </div>
          </IonCol>
        </IonRow>
      </>
    )
  }

  const videoLevel =
    lessonDetails.videoLevel === 'Elementary'
      ? 'Upper-beginner'
      : lessonDetails.videoLevel
  return (
    <>
      <IonRow className="ion-align-items-center ion-justify-content-center">
        <IonCol size="12" className="ion-align-self-center">
          <h6 className="lesson-heading">Introduction</h6>
          <IonText>{lessonDetails?.introduction}</IonText>
        </IonCol>
      </IonRow>
      <IonRow className="ion-align-items-center ion-justify-content-center">
        <IonCol size="12" className="ion-align-self-center">
          <p className="c-orange">{lessonDetails?.tags}</p>
        </IonCol>
      </IonRow>
      <IonRow className="ion-align-items-center ion-justify-content-center">
        <IonCol size="12" className="ion-align-self-center">
          <h6 className="lesson-heading">Level</h6>
          <IonText>{lessonDetails?.videoLevelLabel}</IonText>
        </IonCol>
      </IonRow>
      <IonRow className="ion-align-items-center ion-justify-content-center">
        <IonCol size="12" className="ion-align-self-center">
          <h6 className="lesson-heading">Number of Scenes</h6>
          <IonText>
            {lessonDetails.scenes?.length} scenes
            <small>(~20-30 mins. Each scene is ~3 mins to study)</small>
          </IonText>
        </IonCol>
      </IonRow>

      <IonRow className="ion-align-items-center ion-justify-content-center">
        <IonCol size="12" className="ion-align-self-center">
          <p
            className="lesson-heading pointer"
            id="course-page"
            style={{textDecoration: 'underline', display: 'inline-block'}}
            onClick={() => {
              navCtrl.navigateBack([
                '/course-details',
                lessonDetails.lessonId,
                'myCourse',
              ])
            }}
          >
            Go to the course page
          </p>
        </IonCol>
      </IonRow>
    </>
  )
}

function getLessonUsageMessage(profile, isDraft, isCompletedLesson) {
  console.log({profile})
  let {currentPackage, subscriptionProductId} = profile
  // currentPackage = 'Trial'
  // subscriptionProductId = 'monthly'
  // console.log({profile, currentPackage, subscriptionProductId})

  if (isDraft === true) {
    return {
      subHeader: '',
      message: "1 lesson won't be used",
      action: 'start',
    }
  }

  if (isCompletedLesson) {
    let message = ''
    if (
      currentPackage === 'Subscription' &&
      (subscriptionProductId !== 'yearly' || subscriptionProductId !== '6_months')
    ) {
      message = 'You’ve already completed this lesson. Do you want to re-study it?'
    } else {
      message = "You've studied this. <br/> 1 lesson won't be used"
    }
    return {
      subHeader: '',
      message: message,
      action: 'start',
    }
  }

  if (currentPackage === 'SubscriptionExpired') {
    return {
      header: 'Subscription expired!',
      message: 'Looks like your subscription has expired. Kindly renew it to continue.',
      action: 'subscribe',
    }
  }

  if (currentPackage === 'Trial') {
    const total = profile.trialLessonLimit
    const left = total - profile.completedLesson
    if (left <= 0) {
      return {
        header: 'Speaky Peaky',
        message:
          "Hooray! You've finished all free lessons. Please purchase a subscription for more lessons",
        action: 'subscribe',
      }
    }
    // prettier-ignore
    return {
      subHeader: 'You will use 1 lesson.',
      message: `<b style="color:#E22D2D">${left} out of ${total}</b> ${left <= 1 ? 'lesson is' : 'lessons are'} left.`,
      action: 'start'
    }
  }

  if (currentPackage === 'Subscription') {
    let subHeader = ''
    let message = ''
    if (subscriptionProductId === 'yearly' || subscriptionProductId === '6_months') {
      message = 'Are you sure you want to study this lesson?'
    } else if (
      subscriptionProductId === 'monthly' ||
      subscriptionProductId === undefined ||
      subscriptionProductId === null
    ) {
      subHeader = 'You will use 1 lesson.'

      const total = profile.subscriptionLesson
      const left = total - profile.completedLesson

      if (left <= 0) {
        return {
          header: 'Speaky Peaky',
          message: "Hooray! You've finished all lessons.",
        }
      }

      // prettier-ignore
      message = `<b style="color:#E22D2D">${left} out of ${total}</b> ${left <= 1 ? 'lesson is' : 'lessons are'} left this month.`
    }

    return {
      subHeader,
      message,
      action: 'start',
    }
  }
  return {
    subHeader: 'none',
    message: 'none',
  }
}

function StartButton({isDraft, lessonDetails, onStart}) {
  const navController = useStore((state) => state.navController)
  const [present] = useIonAlert()
  const [addToMyLesson] = useAddToMyLessonMutation({
    onCompleted: (data) => {
      if (data.addToMyLesson.isMy) {
        onStart()
      }
    },
  })
  // const {post: addMyCourseLesson, response} = useFetch('/lesson/add-course-lesson')
  const {
    data: {profile},
    loading,
    refetch,
  } = useGetProfileQuery({fetchPolicy: 'cache-and-network'})
  const isCompletedLesson = lessonDetails.isCompleted

  async function handleStart() {
    if (isDraft) {
      return onStart()
    }
    addToMyLesson({variables: {lessonId: lessonDetails._id}})
  }

  async function handleStartClick() {
    try {
      // refetch()
      // no free tiral
      // expired

      const {subHeader, message, action} = getLessonUsageMessage(
        profile,
        isDraft,
        isCompletedLesson,
      )
      console.log({subHeader, message, action})
      if (action === 'start') {
        await present({
          mode: 'md',
          cssClass: 'startLessonAlert',
          subHeader: subHeader,
          message: message,
          buttons: [
            {
              text: '',
              role: 'cancel',
              cssClass: 'startLessonCancelBtn',
            },
            {
              text: 'START',
              cssClass: 'startLessonBtn',
              handler: () => {
                handleStart()
              },
            },
          ],
        })
      } else if (action === 'subscribe') {
        await present({
          mode: 'md',
          cssClass: 'startLessonAlert',
          subHeader: subHeader,
          message: message,
          buttons: [
            {
              text: '',
              role: 'cancel',
              cssClass: 'startLessonCancelBtn',
            },

            {
              text: 'Subscribe',
              cssClass: 'startLessonBtn',
              handler: () => {
                navController.navigateForward('/subscriptionplans')
              },
            },
          ],
        })
      } else {
        await present({
          mode: 'md',
          cssClass: 'startLessonAlert',
          subHeader: subHeader,
          message: message,
          buttons: [
            {
              text: '',
              role: 'cancel',
              cssClass: 'startLessonCancelBtn',
            },
          ],
        })
      }
    } catch {}
  }

  return (
    <>
      <IonButton
        mode="ios"
        color="danger"
        shape="round"
        expand="block"
        onClick={handleStartClick}
        disabled={loading}
      >
        <IonIcon slot="start" icon={play}></IonIcon>
        <strong>START</strong>
      </IonButton>
    </>
  )
}

const LessonDetails: React.FC<any> = ({subLessonId, isDraft}) => {
  const navController = useStore((state) => state.navController)
  const sharedService = useStore((state) => state.sharedService)
  const platform = useStore((state) => state.platform)
  const [segment, setSegment] = React.useState('introduction')
  const [lessonDetails, setLessonDetails] = React.useState<Lesson>()
  const [showAlert, setShowAlert] = React.useState(false)
  const [playing, setPlaying] = React.useState(false)
  // const {profile} = useProfile()
  const {
    data: {profile},
  } = useGetProfileQuery()
  const [playedSeconds, setPlayedSeconds] = React.useState(0)
  const [setSave, {loading: saveLoading}] = useSetLessonSavedMutation({
    onCompleted: (data) => {
      setLessonDetails((lesson) => ({...lesson, isSaved: data.setLessonSaved.isSaved}))
    },
  })
  const lessonRes = useGetLessonDeatilQuery({
    // fetchPolicy: 'cache-and-network',
    variables: {
      id: subLessonId,
    },
    onCompleted: (data) => {
      console.log(data.lesson)
      setLessonDetails(data.lesson as Lesson)
    },
    skip: !subLessonId,
  })

  // console.log({lessonRes})

  const playerRef = React.useRef<ReactPlayer>(null)

  if (!lessonDetails) {
    return <IonProgressBar type="indeterminate" />
  }

  function handleUnstarted() {
    console.log('Unstarted', {playing})
    // if (playing) {
    //   const st = playerRef.current?.getCurrentTime()
    //   setTimeout(() => {
    //     const ed = playerRef.current?.getCurrentTime()
    //     if (st === ed) {
    //       setPlaying(false)
    //       setShowAlert(true)
    //     }
    //   }, 1200)
    // }
  }

  // console.log({lessonDetails})
  const scenes = lessonDetails.scenes.map((s: any) => ({...s, length: s.end - s.start}))
  const firstScene = scenes[0]
  const scenePlayedSeconds = Math.max(playedSeconds - firstScene.start, 0)
  const playedRate = scenePlayedSeconds / 20 || 0

  async function handleSaveLesson() {
    try {
      setSave({
        variables: {
          id: subLessonId,
          isSave: !lessonDetails.isSaved,
        },
      })

      // await loadData()
    } catch (error) {
      console.log(error)
    }
  }

  function handleProgress(data: any) {
    setPlayedSeconds(data.playedSeconds)

    if (data.playedSeconds >= firstScene.start + 20) {
      setPlaying(false)
      playerRef.current?.seekTo(firstScene.start)
    }
  }
  async function handleOnReady(player: ReactPlayer) {
    try {
      player.seekTo(Math.floor(firstScene.start))
      const helpDone = await sharedService.getNativeStorage('isHelpModeDone')
      const isHelpModeDone = Boolean(helpDone?.data)
      if (!isHelpModeDone) {
        const steps = [
          {
            element: '#highlight-save-lesson-icon',
            popover: {
              title: 'Save for later',
              description: 'You can save lesson for later.',
              position: 'left',
            },
          },
          {
            element: '#highlight-comment',
            popover: {
              title: 'Comments',
              description: 'See what other people had to say about this lesson.',
              position: 'top-right',
            },
          },
        ]

        sharedService.showHelpGuide({
          steps,
          onClose: () => {
            setPlaying(true)
            sharedService.setNativeStorage('isHelpModeDone', true)
          },
        })
      } else {
        setPlaying(true)
      }
    } catch {}
  }
  // const isNew = !lessonDetails.completedLesson
  // const isSaved = saveLoading ? !lessonDetails.isSaved : lessonDetails.isSaved
  const isSaved = lessonDetails.isSaved

  return (
    <IonPage className="lesson-details-page">
      <IonHeader mode="ios">
        <IonToolbar mode="ios">
          <IonButtons slot="start">
            <IonButton
              mode="md"
              onClick={() => {
                navController.pop()
              }}
            >
              <IonIcon color="dark" slot="icon-only" icon={chevronBack}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>{lessonDetails.lessonName}</IonTitle>
          <div style={{textAlign: 'center'}}></div>
          <IonButtons slot="end">
            <IonButton
              mode="md"
              onClick={() => {
                navController.navigateRoot('/dashboard/lessons')
              }}
            >
              <IonIcon
                color="dark"
                mode="md"
                slot="icon-only"
                src="/assets/images/home.svg"
              ></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* <HelpGuide />
        {isNew && subscription.subscriptionStatus === 'SubscriptionExpired' && (
          <SubscriptionExpiredAlerts />
        )} */}
        {/* {isNew && subscription.trialEnd && <LessonEndAlerts />} */}
        <IonGrid className="ion-no-padding">
          <IonRow>
            <IonCol className="ion-no-padding">
              <IonRow
                // *ngIf="isLoaded; else loadingPlaceholder"

                className="lesson ion-align-items-center ion-justify-content-center"
              >
                <IonCol
                  sizeXs="12"
                  sizeSm="12"
                  sizeMd="10"
                  sizeLg="8"
                  sizeXl="8"
                  className="ion-align-self-center ion-no-padding youtube-container"

                  // #container
                >
                  <div className="player-wrapper">
                    <ReactPlayer
                      ref={playerRef}
                      url={`https://www.youtube.com/watch?v=${lessonDetails.youtubeId}`}
                      controls={false}
                      // playbackRate={2}
                      playing={playing}
                      width="100%"
                      height="auto"
                      // light
                      config={{
                        youtube: {
                          playerVars: {
                            showinfo: 0,
                            disablekb: 1,
                            controls: 0,
                            cc_load_policy: 0,
                            origin: window.location.origin,
                          },
                          // embedOptions: {},
                          onUnstarted: handleUnstarted,
                        },
                      }}
                      progressInterval={500}
                      // onPlay={}
                      onProgress={handleProgress}
                      onReady={handleOnReady}
                    />
                    <div className="player-overlay">
                      <span
                        id="highlight-save-lesson-icon"
                        onClick={handleSaveLesson}
                        className={clsx(
                          'ion-activatable ripple-parent',
                          saveLoading && 'save-loading',
                        )}
                      >
                        {/* <IonSpinner /> */}
                        {saveLoading ? (
                          <IonSpinner color="medium" />
                        ) : isSaved ? (
                          <IonIcon src="/assets/images/like-active.svg"></IonIcon>
                        ) : (
                          <IonIcon src="/assets/images/like_inactive.svg"></IonIcon>
                        )}
                        <IonRippleEffect />
                      </span>
                    </div>
                  </div>
                </IonCol>
              </IonRow>
              <IonAlert
                isOpen={showAlert}
                onDidDismiss={() => setShowAlert(false)}
                cssClass="my-custom-class"
                header={'Can not Autoplay!'}
                message={
                  'Autoplay is not allowed without <strong>User interacts</strong>!!!'
                }
                buttons={[
                  {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                  },
                  {
                    text: 'Play',
                    handler: () => {
                      setPlaying(true)
                    },
                  },
                ]}
              />

              <IonRow
                // *ngIf="isLoaded"
                className="ion-align-items-center ion-justify-content-center"
              >
                <IonCol
                  sizeXs="12"
                  sizeSm="12"
                  sizeMd="10"
                  sizeLg="8"
                  sizeXl="8"
                  className="ion-align-self-center ion-no-padding"
                >
                  <div className="playing-progress-bar" style={{width: '100%'}}>
                    <div className={`scene-bar active`} style={{flex: 1}}>
                      <div
                        className="scene-progress"
                        style={{
                          width: `${playedRate * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                  <IonRow className="youtube-handler ion-align-items-center ion-justify-content-center">
                    <IonCol
                      size="5"
                      className="ion-text-center ion-align-self-center ion-no-padding"
                    >
                      <IonButton
                        fill="clear"
                        onClick={() => {
                          const curTime = playerRef.current?.getCurrentTime() || 0
                          const time = Math.max(curTime - 3, Math.floor(firstScene.start))
                          playerRef.current?.seekTo(time)
                          setPlayedSeconds(time)
                        }}
                      >
                        <IonIcon src="/assets/images/lessons/3seconds-back.svg"></IonIcon>
                      </IonButton>
                    </IonCol>
                    <IonCol
                      size="2"
                      className="ion-text-center ion-align-self-center ion-no-padding"
                    >
                      {playing ? (
                        <IonButton fill="clear" onClick={() => setPlaying(false)}>
                          <IonIcon src="/assets/images/lessons/pause-lesson.svg"></IonIcon>
                        </IonButton>
                      ) : (
                        <IonButton fill="clear" onClick={() => setPlaying(true)}>
                          <IonIcon src="/assets/images/lessons/play-lesson.svg"></IonIcon>
                        </IonButton>
                      )}
                    </IonCol>
                    <IonCol
                      size="5"
                      className="ion-align-self-center ion-no-padding"
                    ></IonCol>
                  </IonRow>
                </IonCol>
              </IonRow>

              <IonRow className="ion-align-items-center ion-justify-content-center">
                <IonCol
                  size-xs="12"
                  size-sm="12"
                  size-md="10"
                  size-xl="8"
                  size-lg="8"
                  className="ion-align-self-center ion-no-padding"
                >
                  <IonSegment
                    color="danger"
                    mode="md"
                    value={segment}
                    onIonChange={(e) => setSegment(e.detail.value)}
                  >
                    <IonSegmentButton mode="md" value="introduction">
                      <IonLabel>Lesson Intro</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton id="highlight-comment" mode="md" value="comments">
                      <IonLabel>Comments</IonLabel>
                    </IonSegmentButton>
                  </IonSegment>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonRow>

          <IonRow className="ion-align-items-center ion-justify-content-center">
            <IonCol
              className="ion-align-self-center ion-padding-end ion-padding-start"
              size="12"
            >
              <IonRow className="ion-align-items-center ion-justify-content-center">
                <IonCol
                  size-xs="12"
                  size-sm="12"
                  size-md="10"
                  size-xl="8"
                  size-lg="8"
                  className="ion-align-self-center"
                >
                  {lessonDetails &&
                    (segment === 'introduction' ? (
                      <div>
                        <Introduction
                          lessonDetails={lessonDetails}
                          // [subLessonDetails]="subLessonDetails"
                        />
                      </div>
                    ) : (
                      <Comments
                        lessonId={lessonDetails?.courseId}
                        subLessonId={lessonDetails?._id}
                        profile={profile}
                        platform={platform}
                      />
                    ))}
                </IonCol>
              </IonRow>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonFooter mode="ios">
        <IonRow className="ion-align-items-center ion-justify-content-center">
          <IonCol
            size-xs="12"
            size-sm="12"
            size-md="6"
            size-xl="4"
            size-lg="4"
            className="ion-align-self-center"
          >
            <StartButton
              isDraft={isDraft}
              lessonDetails={lessonDetails}
              onStart={() => {
                setPlaying(false)
                navController.navigateForward([
                  '/lesson-steps',
                  lessonDetails._id,
                  isDraft,
                ])
              }}
            />
          </IonCol>
        </IonRow>
      </IonFooter>
    </IonPage>
  )
}

const containerElementName = 'rcLessonDetails'
@Component({
  selector: 'app-lesson-details',
  template: `<div #${containerElementName}></div>`,
  styleUrls: ['./comments/Comments.scss', './lesson-details.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LessonDetailsPage implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @ViewChild(containerElementName, {static: false}) containerRef: ElementRef

  profile
  isDraft = false
  subLessonId

  constructor(private route: ActivatedRoute, public sharedService: SharedService) {
    this.sharedService.gaTrackView('Lesson Details Start Screen')
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.render()
  }

  ngAfterViewInit() {
    this.render()
  }

  ngOnDestroy() {
    unmountComponentAtNode(this.containerRef.nativeElement)
  }

  private render() {
    if (this.containerRef) {
      render(
        <AppProvider>
          <LessonDetails isDraft={this.isDraft} subLessonId={this.subLessonId} />
        </AppProvider>,
        this.containerRef.nativeElement,
      )
    }
  }

  ngOnInit() {
    this.route.params.subscribe(async (params) => {
      try {
        const isDraft = JSON.parse(params.isDraft)
        this.isDraft = isDraft
        const subLessonId = params.subLessonId
        this.subLessonId = subLessonId
        if (!subLessonId) {
          throw new Error('No SubLessonId')
        }
        this.render()
      } catch (error) {
        // this.showAlertAndExit(error)
      }
    })
  }
}
