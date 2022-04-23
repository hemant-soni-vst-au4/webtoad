import React from 'react'
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
import {Router} from '@angular/router'
import {gql} from '@apollo/client'
import {AlertController, ModalController, NavController, Platform} from '@ionic/angular'
import {
  IonAlert,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonNote,
  IonPage,
  IonRippleEffect,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonSpinner,
  IonThumbnail,
  useIonToast,
} from '@ionic/react'
import {format} from 'date-fns/fp'
import {close} from 'ionicons/icons'
import {omit} from 'lodash'
import {render, unmountComponentAtNode} from 'react-dom'
import {SharedService} from 'src/app/services/shared.service'
import AppProvider from 'src/reactapp/AppProvider'
import {useHelpGuide} from 'src/reactapp/pages/lessonSteps/useHelpGuide'
import {
  useDeleteNoteMutation,
  useGerReviewCompletedLessonsQuery,
  useMoreNotesQuery,
} from 'src/reactapp/types-and-hooks'
import useSpeak from 'src/reactapp/useSpeak'
import {useStore} from 'src/reactapp/useStore'

const containerElementName = 'rcReviewPage'

@Component({
  selector: 'app-review',
  // templateUrl: './review.page.html',
  template: `<div #${containerElementName}></div>`,
  styleUrls: ['./review.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ReviewPage implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @ViewChild(containerElementName, {static: false}) containerRef: ElementRef
  // selectedSegment = 'lesson'

  // completedLessons = new Array()
  // completedLessonsPage = 1
  // completedLessonsLoaded = false
  // completedLessonsTotal: number = null

  // userNotes = new Array()
  // userNotesPage = 0
  // userNotesLoaded = false
  // userNotesTotal: number = null

  // isDesktop = false
  // isCompletedLessons = false
  // speech: Speech = null

  constructor(
    private router: Router,
    public alertController: AlertController,
    public sharedService: SharedService,
    private navController: NavController,
    public platform: Platform,
    public modalController: ModalController,
  ) {
    this.sharedService.gaTrackView('Review Screen')

    // this.platform
    //   .ready()
    //   .then(() => {
    //     if (this.platform.is('android') || this.platform.is('ios')) {
    //       if (this.platform.is('pwa')) {
    //         this.isDesktop = true
    //       } else {
    //         this.isDesktop = false
    //       }

    //       if (this.platform.is('mobileweb')) {
    //         this.isDesktop = true
    //       } else {
    //         this.isDesktop = false
    //       }
    //     } else {
    //       this.isDesktop = true
    //     }

    //     if (this.isDesktop === true) {
    //       const speech = new Speech() // will throw an exception if not browser supported
    //       if (speech.hasBrowserSupport()) {
    //         speech
    //           .init({lang: 'en-US'})
    //           .then(() => {
    //             this.speech = speech
    //           })
    //           .catch((e) => {
    //             console.error('An error occured while initializing : ', e)
    //           })
    //       }
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })
  }

  ionViewDidEnter() {
    this.render()
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
          <ReactReviewPage />
        </AppProvider>,
        this.containerRef.nativeElement,
      )
    }
  }

  ngOnInit() {}

  back() {
    this.navController.setDirection('back')
    this.router.navigate(['/dashboard/review'])
  }
}

function useReviewHelpGuide() {
  return useHelpGuide('isReviewHelpModeDone', [
    {
      element: '#completedLessons',
      popover: {
        title: 'Review past lessons',
        description:
          "Past lessons you've completed. You can re-study them as much as you like",
        position: 'bottom',
      },
    },
    {
      element: '#phrases',
      popover: {
        title: 'Review saves words',
        description: 'Save words and expressions while you study lessons.',
        position: 'bottom',
      },
    },
  ])
}

function getThumnailUrl(youtubeId) {
  return `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`
}

function UserNote({userNote, onDismiss}) {
  const speak = useSpeak()
  function handleSpeak() {
    speak(userNote.word)
  }
  return (
    <IonRow className="usernote-content">
      <IonCol>
        <div className="modal-header">
          <div className="title ion-no-margin c-red">
            <img
              onClick={handleSpeak}
              className="play play-icon"
              src="/assets/images/icon_play.svg"
              alt="speak word"
            />
          </div>
          <div className="title-word  c-red">{userNote?.word}</div>
          <IonIcon
            mode="md"
            icon={close}
            className="modal-dismiss pointer"
            onClick={onDismiss}
          ></IonIcon>
        </div>

        <IonRow className="modal-body ion-align-items-center ion-justify-content-center">
          <IonCol size="12" className="ion-align-self-center">
            {userNote?.meaning ? (
              <>
                <p>
                  <strong className="c-orange">English: </strong> {userNote?.meaning}
                </p>
                <p>{userNote?.kor}</p>
              </>
            ) : (
              <>
                {userNote?.kor && (
                  <p>
                    <b className="c-orange">(Korean):</b> {userNote?.kor}
                  </p>
                )}
                {userNote?.noun && (
                  <p>
                    <b className="c-orange">(Noun):</b> {userNote?.noun}
                  </p>
                )}
                {userNote?.verb && (
                  <p>
                    <b className="c-orange">(Verb):</b> {userNote?.verb}
                  </p>
                )}
                {userNote?.adv && (
                  <p>
                    <b className="c-orange">(Adverb):</b> {userNote?.adv}
                  </p>
                )}
                {userNote?.adj && (
                  <p>
                    <b className="c-orange">(Adjective):</b> {userNote?.adj}
                  </p>
                )}
              </>
            )}
          </IonCol>
        </IonRow>
      </IonCol>
    </IonRow>
  )
}
const formatDate = format('MMM d, y')

const PAGE_SIZE = 20

const GET_COMPLETED_LESSONS = gql`
  query completedLessons($page: Int) {
    completedLessons(page: $page, limit: 20) {
      _id
      courseId
      lessonName
      completedAt
      course {
        _id
        videoLevel
        thumbnail
        topic {
          title
        }
      }
    }
  }
`

function Lesson() {
  const {loading, error, data, fetchMore} = useGerReviewCompletedLessonsQuery({
    variables: {size: PAGE_SIZE},
  })
  const navCtrl = useStore((state) => state.navController)
  // const {loading, error, data, fetchMore} = useQuery(GET_COMPLETED_LESSONS, {
  //   variables: {page: 1},
  //   // fetchPolicy: 'cache-and-network',
  //   fetchPolicy: 'cache-first',
  //   onCompleted: (data) => {
  //     if (data.completedLessons.length < PAGE_SIZE) {
  //       setNoMore(true)
  //     }
  //   },
  // })
  if (loading) {
    return (
      <div className="ion-text-center ion-padding-top">
        <IonSpinner name="dots" />
      </div>
    )
  }
  if (error) {
    return <div>Error...</div>
  }

  function handleInfinite(e) {
    // const nextPage = Math.round(data?.completedLessons.length / 10) + 1

    fetchMore({
      variables: {
        cursor: data.moreCompletedLessons.cursor,
        // page: nextPage,
      },
      // updateQuery: (prev, {fetchMoreResult}) => {
      //   if (!fetchMoreResult) return prev
      //   if (fetchMoreResult.completedLessons.length < 10) {
      //     setNoMore(true)
      //   }
      //   return Object.assign({}, prev, {
      //     completedLessons: [
      //       ...prev.completedLessons,
      //       ...fetchMoreResult.completedLessons,
      //     ],
      //   })
      // },
    })

    e.target.complete()
  }
  const completedLessons = data.moreCompletedLessons.nodes || []

  return (
    <>
      {/* <IonRow className="ion-align-items-center ion-justify-content-center">
      <IonCol className="ion-align-self-center ion-no-padding"> */}
      <IonList className="completed-lessons">
        {completedLessons.map((lesson, i) => (
          <IonItem
            key={lesson._id}
            button
            onClick={() => {
              navCtrl.navigateForward(`/lesson-details/${lesson._id}/true/false`)
            }}
            className="ion-align-self-center"
            detail={false}
            lines="none"
          >
            <IonNote className="review-num ion-align-self-center ion-text-center">
              <strong>{i + 1}</strong>
            </IonNote>
            <IonThumbnail>
              <img src={getThumnailUrl(lesson.youtubeId)} alt={lesson.lessonName} />
            </IonThumbnail>
            <IonLabel className="ion-align-self-center">
              <div className="lesson-level">
                {lesson.videoLevelLabel} - {lesson.videoType}
              </div>
              <div className="lesson-name"> {lesson.lessonName} </div>
              <div className="lesson-completed-date">
                Studied on {formatDate(new Date(lesson.completedAt))}
              </div>
            </IonLabel>
            {/* <IonRow
              className="hover-pointer ion-activatable ripple-parent ion-align-items-center ion-justify-content-center completed-lessons"
              onClick={() => {
                // history.push(`/lesson/${lesson._id}`)
              }}
            >
              <IonRippleEffect />
              <IonCol
                size-xs="1"
                className="review-num ion-align-self-center ion-text-center"
              >
                <strong>{i + 1}</strong>
              </IonCol>
              <IonCol
                size-xs="3"
                size-sm="3"
                size-md="3"
                size-lg="2"
                size-xl="2"
                className="ion-align-self-center"
              >
                <img src={getThumnailUrl(lesson.youtubeId)} alt={lesson.lessonName} />
              </IonCol>
              <IonCol
                size-xs="7"
                size-sm="7"
                size-md="7"
                size-lg="9"
                size-xl="9"
                className="ion-align-self-center ion-padding-start"
              >
                <div className="lesson-level">
                  {lesson.videoLevel} - {lesson.videoType}
                </div>
                <div className="lesson-name"> {lesson.lessonName} </div>
                <div className="lesson-completed-date">
                  Studied on {formatDate(new Date(lesson.completedAt))}
                </div>
              </IonCol>
            </IonRow> */}
          </IonItem>
        ))}
      </IonList>

      {completedLessons.length === 0 && (
        <IonRow>
          <IonCol className="ion-text-center">
            <h5>
              <strong>You haven’t studied any lessons yet.</strong>
            </h5>
          </IonCol>
        </IonRow>
      )}
      <IonInfiniteScroll
        disabled={!data.moreCompletedLessons.hasMore}
        onIonInfinite={handleInfinite}
        threshold="200px"
      >
        <IonInfiniteScrollContent>
          <IonSpinner />
        </IonInfiniteScrollContent>
      </IonInfiniteScroll>
      {/* </IonCol>
    </IonRow> */}
    </>
  )
}

function PhraseAndVocab() {
  const speak = useSpeak()
  const [presentToast] = useIonToast()
  const [userNote, setUserNote] = React.useState<any>()
  const [deleteNote] = useDeleteNoteMutation({
    onCompleted: (data) => {
      presentToast('Delete successfully.', 2000)
    },
    onError: (err) => {
      presentToast('Oops! Something went wrong. Please try again.', 2000)
    },
    update(cache, {data}) {
      if (data.deleteNote) {
        const idToRemove = data.deleteNote
        cache.modify({
          fields: {
            moreNotes(existing, {readField}) {
              const nodes = omit(existing.nodes, idToRemove)
              console.log({existing})
              return {...existing, nodes}
            },
          },
        })
      }
    },
  })

  const [deleteUserNote, setDeleteUserNote] = React.useState<any>()
  const {loading, error, data, fetchMore} = useMoreNotesQuery({
    variables: {size: PAGE_SIZE},
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-first',
  })

  if (loading) {
    return (
      <div className="ion-text-center ion-padding-top">
        <IonSpinner name="dots" />
      </div>
    )
  }
  if (error) {
    return <div>Error...</div>
  }

  function handleInfinite(e) {
    fetchMore({
      variables: {
        cursor: data.moreNotes.cursor,
      },
    }).finally(() => {
      e.target.complete && e.target.complete()
    })
  }

  const userNotes = data.moreNotes.nodes

  function handleSpeak(userNote) {
    speak(userNote.word)
  }

  return (
    <div style={{position: 'relative'}} className="phrase-n-vocab">
      <IonRow className="ion-align-items-center ion-justify-content-center">
        <IonCol
          className="ion-align-self-center"
          size-xs="12"
          size-sm="12"
          size-md="10"
          size-lg="9"
          size-xl="9"
        >
          {userNotes.map((userNote) => (
            <IonRow
              key={userNote._id}
              className="hover-pointer  ripple-parent ion-align-items-center ion-justify-content-center completed-lessons border-bottom"
              // onClick={() => setUserNote(userNote)}
            >
              <IonCol
                size-xs="9"
                size-sm="9"
                size-md="9"
                size-lg="9"
                size-xl="9"
                className="ion-align-self-center "
                onClick={() => setUserNote(userNote)}
              >
                <div className="usernote-word">{userNote.word}</div>
              </IonCol>
              <IonCol size="3" className="ion-align-self-center ion-no-padding">
                <IonRow className="ion-align-items-center">
                  <IonCol
                    size="6"
                    className="ion-align-self-center"
                    // (click)="onSpeakNote(userNote)"
                    onClick={() => handleSpeak(userNote)}
                  >
                    <img
                      className="play-icon"
                      src="/assets/images/icon_play.svg"
                      alt="speak word"
                    />
                  </IonCol>
                  <IonCol size="6" className="ion-align-self-center">
                    <IonIcon
                      onClick={() => setDeleteUserNote(userNote)}
                      icon={close}
                      color="medium"
                      mode="md"
                    ></IonIcon>
                  </IonCol>
                </IonRow>
              </IonCol>
              <IonRippleEffect />
            </IonRow>
          ))}
          {loading ? (
            <IonRow>
              <IonCol>
                <IonSpinner />
              </IonCol>
            </IonRow>
          ) : (
            userNotes.length === 0 && (
              <IonRow>
                <IonCol className="ion-text-center">
                  <h5>
                    <strong>You haven’t saved any words yet.</strong>
                  </h5>
                </IonCol>
              </IonRow>
            )
          )}

          <IonInfiniteScroll
            disabled={!data.moreNotes.hasMore}
            onIonInfinite={handleInfinite}
            threshold="100px"
          >
            <IonInfiniteScrollContent loadingSpinner="circular"></IonInfiniteScrollContent>
          </IonInfiniteScroll>
        </IonCol>
        <IonModal
          mode="ios"
          isOpen={!!userNote}
          cssClass="userNoteModal"
          onDidDismiss={() => setUserNote(undefined)}
        >
          <UserNote userNote={userNote} onDismiss={() => setUserNote(undefined)} />
        </IonModal>
        <IonAlert
          isOpen={!!deleteUserNote}
          onDidDismiss={() => setDeleteUserNote(undefined)}
          // cssClass='my-custom-class'
          // header={'Alert'}
          // subHeader={'Subtitle'}
          message={'Are you sure you want to delete this?'}
          buttons={[
            {
              text: 'No',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                console.log('Confirm Cancel: blah')
              },
            },
            {
              text: 'Yes',
              handler: () => {
                deleteNote({variables: {id: deleteUserNote._id}})
                  .then((data) => {})
                  .catch((err) => {
                    console.log(err)
                  })
              },
            },
          ]}
        />
      </IonRow>
    </div>
  )
}

function ReactReviewPage() {
  const [segment, setSegment] = React.useState('lesson')
  // const [segment, setSegment] = React.useState('phrasesAndVocab')
  const {showHelpGuide} = useReviewHelpGuide()
  React.useEffect(() => {
    showHelpGuide()
  }, [])
  return (
    <IonPage className="review-page">
      <IonContent className="ion-no-padding">
        <IonGrid className="ion-no-padding">
          <IonRow className="ion-align-items-center ion-justify-content-center">
            <IonCol
              sizeXs="12"
              sizeSm="12"
              sizeMd="9"
              sizeLg="8"
              sizeXl="8"
              className="ion-align-self-center"
            >
              <h1>
                <strong>Review</strong>
              </h1>
            </IonCol>
          </IonRow>
          <IonRow className="ion-align-items-center ion-justify-content-center">
            <IonCol
              className="ion-no-padding ion-align-self-center"
              sizeXs="12"
              sizeSm="12"
              sizeMd="10"
              sizeLg="9"
              sizeXl="9"
            >
              <IonSegment
                value={segment}
                onIonChange={(e) => setSegment(e.detail.value)}
                // value="lesson"
                color="danger"
                mode="md"
              >
                <IonSegmentButton id="completedLessons" mode="md" value="lesson">
                  <IonLabel>Lesson</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton id="phrases" mode="md" value="phrasesAndVocab">
                  <IonLabel>{'Phrase & Vocab'}</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </IonCol>
          </IonRow>
          <IonRow className="ion-align-items-center ion-justify-content-center">
            <IonCol
              sizeXs="12"
              sizeSm="12"
              sizeMd="10"
              sizeLg="9"
              sizeXl="9"
              className="ion-align-self-center ion-no-padding"
            >
              {segment === 'lesson' ? <Lesson /> : <PhraseAndVocab />}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}
