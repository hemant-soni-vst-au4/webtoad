import {Box, Heading} from '@chakra-ui/react'
import {
  IonButton,
  IonCol,
  IonContent,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRippleEffect,
  IonRouterLink,
  IonRow,
  IonSpinner,
  IonText,
  IonThumbnail,
  isPlatform,
  useIonRouter,
} from '@ionic/react'
import React from 'react'
import useFetch from 'use-http'
import './LessonsPage.scss'

function convertLesson(lesson) {
  if (!lesson) return
  return {
    ...lesson,
    thumbnail: `https://img.youtube.com/vi/${lesson.youtubeId}/mqdefault.jpg`,
    videoLevel: lesson.videoLevel === 'Elementary' ? 'Upper-beginner' : lesson.videoLevel,
  }
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
function HorizontalLessonList({heading, allLink, loading, lessons}) {
  // const history = useHistory()
  const router = useIonRouter()
  return (
    <>
      <IonRow className="ion-justify-content-center ion-padding  pb-0">
        <IonCol
          sizeXs="9"
          sizeSm="9"
          sizeMd="9"
          sizeLg="8"
          sizeXl="7"
          className="ion-align-self-center"
        >
          <h3 className="mt-0 font-weight-400">
            <strong>{heading}</strong>
          </h3>
        </IonCol>
        <IonCol
          sizeXs="3"
          sizeSm="3"
          sizeMd="1"
          sizeLg="1"
          sizeXl="1"
          className="ion-align-self-center"
        >
          <IonRouterLink routerLink={allLink} color="danger" className="ion-float-right ">
            See All
          </IonRouterLink>
        </IonCol>
      </IonRow>
      <IonRow className="ion-justify-content-center ion-padding ion-padding-bottom pt-0 pr-0 lessons-horizontal">
        <IonCol
          sizeXs="12"
          sizeSm="12"
          sizeMd="10"
          sizeLg="9"
          sizeXl="8"
          className="ion-no-padding ion-align-self-center"
        >
          <ul className="hz-list">
            {lessons.map((lesson) => (
              <li
                key={lesson._id}
                className="hover-pointer ion-activatable ripple-parent"
                onClick={() => router.push(`/lesson/${lesson._id}`, 'forward')}
              >
                <IonThumbnail>
                  <IonImg style={{width: '100%'}} src={lesson.thumbnail}></IonImg>
                </IonThumbnail>
                <h5 className="video-title mt-0">{lesson.lessonName}</h5>
                <IonText color="medium">
                  <h6 className="video-category-label">{lesson.videoLevel}</h6>
                  <h6 className="video-category-label">{lesson.topicDetails?.title}</h6>
                </IonText>
                <IonRippleEffect></IonRippleEffect>
              </li>
            ))}
          </ul>
        </IonCol>
      </IonRow>
    </>
  )
}

function MyCourses({myCourses = []}) {
  if (myCourses.length === 0) {
    return null
  }

  return (
    <>
      <hr
      // *ngIf="myCourses.length"
      />
      <IonRow className="ion-justify-content-center ion-padding-start ion-padding-end ion-padding-top  pb-0">
        <IonCol
          sizeXs="9"
          sizeSm="9"
          sizeMd="9"
          sizeLg="8"
          sizeXl="7"
          className="ion-align-self-center"
        >
          <h3 id="my-course" className="mt-0 font-weight-400">
            <strong>My Courses</strong>
          </h3>
        </IonCol>
        <IonCol
          sizeXs="3"
          sizeSm="3"
          sizeMd="1"
          sizeLg="1"
          sizeXl="1"
          className="ion-align-self-center"
        >
          <IonRouterLink
            routerLink="/mycourses-list"
            color="danger"
            className="ion-float-right "
          >
            See All
          </IonRouterLink>
        </IonCol>
      </IonRow>
      <IonRow className="ion-justify-content-center ion-padding pt-0 pr-0 my-courses">
        <IonCol
          sizeXs="12"
          sizeSm="12"
          sizeMd="10"
          sizeLg="9"
          sizeXl="8"
          className="ion-no-padding ion-align-self-center"
        >
          <IonList
            mode="md"
            className="ion-no-padding"
            // list="none"
          >
            {myCourses.map((myCourse) => (
              <IonItem
                key={myCourse._id}
                lines="none"
                routerLink={`/course/${myCourse._id}`}
                mode="md"
              >
                <IonThumbnail slot="start">
                  <IonImg src={myCourse.thumbnail}></IonImg>
                </IonThumbnail>
                <IonLabel>
                  <h2 className="ion-text-wrap">
                    {myCourse.title || myCourse.introduction}
                  </h2>
                  <IonText color="medium">
                    <p>
                      <IonText>
                        {myCourse?.lessonsCount === 1
                          ? 'Single -'
                          : `${myCourse?.subLessons.length} episode - `}
                      </IonText>
                      {myCourse.videoLevel}
                    </p>
                    <p>{myCourse.topicDetails?.title}</p>
                  </IonText>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        </IonCol>
      </IonRow>
    </>
  )
}

function ShareNow() {
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
          color="danger"
          shape="round"
          expand="block"
          routerLink="/share-app"
        >
          <strong>SHARE NOW</strong>
        </IonButton>
      </IonCol>
    </IonRow>
  )
}

const LessonDashbord: React.FC = () => {
  const day = weekdays[new Date().getDay()]
  const {data, loading, error} = useFetch(
    `/lesson/dashboard`,
    {
      method: 'POST',
      body: {day},
    },
    [],
  )
  if (loading) {
    return <IonSpinner />
  }
  const isDesktop = isPlatform('desktop')
  // return this.apiService.post(`/lesson/dashboard`,{day})
  console.log(data, loading, error)
  const todaysLesson = convertLesson(data.data.today)
  const popularLessons = data.data.popular.map(convertLesson)
  const myCourses = data.data.myCourses.map(convertLesson).slice(0, 3)
  const savedLessons = data.data.savedLessons.map(convertLesson)
  const newUploadsLessons = data.data.newUploads.map(convertLesson)

  return (
    <Box>
      <IonRow
        className={`ion-padding ion-justify-content-center pt-0 pb-0 ${
          isDesktop ? 'ion-margin-top' : ''
        }`}
      >
        <IonCol sizeXs="12" sizeSm="12" sizeMd="10" sizeLg="9" sizeXl="8">
          <Heading id="today-lesson" as="h2" fontSize="22px">
            Study Today's Lesson For You
          </Heading>
          {/* <h2 id="today-lesson" className="ion-no-margin todaysLessonsHeading">
            Study Today's Lesson For You
          </h2> */}
          <p className="c-medium m-5">
            <strong>Recommendation</strong>
          </p>
        </IonCol>
      </IonRow>
      <IonRow className="ion-justify-content-center ion-padding pt-0 pr-0 today-lesson">
        <IonCol
          sizeXs="12"
          sizeSm="12"
          sizeMd="10"
          sizeLg="9"
          sizeXl="8"
          className="ion-no-padding ion-align-self-center"
        >
          <IonList mode="md" className="ion-no-padding">
            <IonItem
              lines="none"
              // [routerLink]="['/course-details', myCourse._id, 'myCourse']"
              // routerLinkActive="router-link-active"
              routerLink={`/lesson/${todaysLesson._id}`}
              routerDirection="forward"
              mode="md"
              className="today-lesson-item"
            >
              <IonThumbnail slot="start">
                <IonImg src={todaysLesson.thumbnail}></IonImg>
              </IonThumbnail>
              <IonLabel>
                <h2 className="ion-text-wrap">{todaysLesson.lessonName}</h2>
                <IonText color="medium">
                  <p>
                    <IonText>{todaysLesson.videoLevel}</IonText>
                  </p>
                  <p>
                    <IonText>{todaysLesson.videoType}</IonText>
                  </p>
                  {/* <p>{todaysLesson.course.topic.title}</p> */}
                </IonText>
              </IonLabel>
            </IonItem>
          </IonList>
        </IonCol>
      </IonRow>
      <MyCourses myCourses={myCourses} />
      <HorizontalLessonList
        heading="Saved For Later"
        allLink="/lesson-list/saved"
        loading={loading}
        lessons={savedLessons}
      />
      <ShareNow />
      <HorizontalLessonList
        heading="Popular Lessons"
        allLink="/lesson-list/popular"
        loading={loading}
        lessons={popularLessons}
      />
      <hr />
      <HorizontalLessonList
        heading="New Uploads"
        allLink="/lesson-list/new-uploads"
        loading={loading}
        lessons={newUploadsLessons}
      />
      {/* <hr />
        <HorizontalLessonList
          heading="Draft Lessons"
          allLink="/lesson-list/draft"
          loading={loading}
          lessons={}
        /> */}
      {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader> */}
    </Box>
  )
}
const LessonsPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-no-padding">
        {isPlatform('mobile') && (
          <IonRow className="ion-justify-content-center">
            <IonCol
              className="ion-align-self-center ion-padding"
              size-xs="4"
              size-sm="4"
              size-lg="2"
              size-md="3"
              size-xl="1"
            >
              <img src="/assets/images/logo.png" width="65%" className="logo" />
            </IonCol>
          </IonRow>
        )}
        <LessonDashbord />
        <Box h="60px"></Box>
      </IonContent>
    </IonPage>
  )
}

export default LessonsPage
