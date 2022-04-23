import {
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonImg,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonProgressBar,
  IonRow,
  IonSkeletonText,
  IonThumbnail,
} from '@ionic/react'
import {format} from 'date-fns/fp'
import {chevronForward} from 'ionicons/icons'
import React from 'react'
import {useParams} from 'react-router-dom'
import useFetch, {CachePolicies} from 'use-http'
import AppHeader from '../components/AppHeader'
import {useProfile, useStore} from '../useStore'
// import './LessonList.scss'

const formatDate = format('MMM d, y')
const formatWeekday = format('EEEE')

const weeklyImages = {
  Monday: '../../../assets/images/search/news.png',
  Tuesday: '../../../assets/images/search/general-english.png',
  Wednesday: '../../../assets/images/search/tv-shows-movies.png',
  Thursday: '../../../assets/images/search/business-english.png',
  Friday: '../../../assets/images/search/speech.png',
  Weekend: '../../../assets/images/search/pop-songs.png',
}

// It's UGLY!!! duplicated with lessons.page.ts
const userLevelIds = {
  '5b117087602e39d075e7cfcc': 'Elementary',
  '5b117088602e39d075e7cfcd': 'Advanced',
}

function convertLesson(lesson: any) {
  if (!lesson) return
  return {
    ...lesson,
    thumbnail: `https://img.youtube.com/vi/${lesson.youtubeId}/mqdefault.jpg`,
    videoLevel: lesson.videoLevel === 'Elementary' ? 'Upper-beginner' : lesson.videoLevel,
  }
}

function LoadingLesson() {
  return (
    <IonItem mode="md">
      <IonThumbnail slot="start">
        <IonImg src="/assets/images/thumbnail-youtube.jpg"></IonImg>
      </IonThumbnail>
      <IonLabel>
        <h2 className="ion-text-wrap">
          <IonSkeletonText animated style={{width: '90%'}}></IonSkeletonText>
          <IonSkeletonText animated style={{width: '75%'}}></IonSkeletonText>
        </h2>
        <p>
          <IonSkeletonText animated style={{width: '60%'}}></IonSkeletonText>
        </p>
      </IonLabel>
      <IonIcon mode="ios" icon={chevronForward} slot="end"></IonIcon>
    </IonItem>
  )
}

export function PopularLessonList() {
  const profile = useProfile()
  const [page, setPage] = React.useState(1)
  const {loading, error, data = []} = useFetch(
    `/lesson/popularLessons/${page}`,
    {
      // method: 'POST',
      // body: JSON.stringify({
      //   lessonTopicId: topicId,
      //   videoLevel: level === 'Upper-Beginner' ? 'Elementary' : level,
      // }),
      onNewData: (list = [], newDatas) => {
        return [...list.slice(0, PER_PAGE * page), ...newDatas.data]
      }, // appends newly fetched todos
      perPage: PER_PAGE,
      cacheLife: 5000,
      cachePolicy: CachePolicies.CACHE_FIRST,
    },
    [page],
  )
  if (error) {
    return <div>Error!</div>
  }

  const lessons = data.map(convertLesson)
  function handleInfinite(e) {
    const nextPage = Math.round(lessons.length / 10) + 1
    setPage(nextPage)
    e.target.complete()
  }

  return (
    <ListView
      title="Popular Lessons"
      list={lessons}
      loading={loading}
      onInfinite={handleInfinite}
    />
  )
}

function ListView({title, list, loading, onInfinite}) {
  return (
    <IonPage>
      <AppHeader />
      <IonContent className="ion-no-padding">
        <IonGrid className="ion-no-padding">
          <IonRow className="ion-align-items-center ion-justify-content-center">
            <IonCol
              sizeXs="12"
              sizeSm="12"
              sizeMd="10"
              sizeLg="9"
              sizeXl="9"
              className="ion-align-self-center"
            >
              <h1 className="ion-no-margin">
                <strong>{title}</strong>
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
              <IonList
                mode="md"
                className="ion-no-padding"
                // list="none"
              >
                {list.map((lesson, i) => (
                  <IonItem
                    key={`${lesson._id}.${i}`}
                    // routerLinkActive="router-link-active"
                    routerDirection="forward"
                    routerLink={`/lesson/${lesson._id}`}
                    mode="md"
                  >
                    <IonThumbnail slot="start">
                      <IonImg src={lesson.thumbnail}></IonImg>
                    </IonThumbnail>
                    <IonLabel>
                      <h2 className="ion-text-wrap">{lesson.lessonName}</h2>
                      <p>{lesson.videoLevel}</p>
                    </IonLabel>
                    <IonIcon mode="ios" icon={chevronForward} slot="end"></IonIcon>
                  </IonItem>
                ))}
              </IonList>
              {loading && (
                <IonList
                  // *ngIf="isPopularLessons"
                  //  list="none"
                  mode="md"
                  className="ion-no-padding"
                >
                  <LoadingLesson />
                  <LoadingLesson />
                  <LoadingLesson />
                  {/* <LoadingLesson /> */}
                </IonList>
              )}
              <IonInfiniteScroll
                disabled={loading}
                // disabled={courses.length >= data.totalLessons}
                onIonInfinite={onInfinite}
                threshold="200px"
              >
                <IonInfiniteScrollContent> </IonInfiniteScrollContent>
              </IonInfiniteScroll>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

function getPayload(profile) {
  let weekday = formatWeekday(new Date())
  if (weekday === 'Saturday' || weekday === 'Sunday') {
    weekday = 'Weekend'
  }

  return {
    day: ['Saturday', 'Sunday'].includes(weekday) ? 'Weekend' : weekday,
    videoLevel: profile.userLevelName,
  }
}

const PER_PAGE = 10

export function NewUploadsLessonList() {
  const profile = useStore((state) => state.profile)
  const [page, setPage] = React.useState(1)
  const {day, videoLevel} = getPayload(profile)
  const {loading, error, data = []} = useFetch(
    `/lesson/get-newUploadLessons/${page}`,
    {
      method: 'POST',
      body: JSON.stringify({day, videoLevel}),
      onNewData: (list = [], newDatas) => {
        return [...list.slice(0, PER_PAGE * page), ...newDatas.data]
      }, // appends newly fetched todos
      perPage: PER_PAGE,
      cacheLife: 5000,
      cachePolicy: CachePolicies.CACHE_FIRST,
    },
    [page, day, videoLevel],
  )
  if (error) {
    return <div>Error!</div>
  }

  const lessons = data.map(convertLesson)
  function handleInfinite(e) {
    const nextPage = Math.round(lessons.length / 10) + 1
    setPage(nextPage)
    e.target.complete()
  }

  return (
    <ListView
      title="New Uploads"
      list={lessons}
      loading={loading}
      onInfinite={handleInfinite}
    />
  )
}
export function SavedLessonList() {
  // const profile = useProfile()
  const profile = useStore((state) => state.profile)
  const [page, setPage] = React.useState(1)
  const {loading, error, data = []} = useFetch(
    `/lesson/savedLessons/${page}`,
    {
      onNewData: (list = [], newDatas) => {
        return [...list.slice(0, PER_PAGE * page), ...newDatas.data]
      }, // appends newly fetched todos
      perPage: PER_PAGE,
      cacheLife: 5000,
      cachePolicy: CachePolicies.CACHE_FIRST,
    },
    [page, profile],
  )
  if (error) {
    return <div>Error!</div>
  }

  const lessons = data.map(convertLesson)
  function handleInfinite(e) {
    const nextPage = Math.round(lessons.length / 10) + 1
    setPage(nextPage)
    e.target.complete()
  }

  return (
    <ListView
      title="Saved For Later"
      list={lessons}
      loading={loading}
      onInfinite={handleInfinite}
    />
  )
}

export default function LessonList() {
  const {loading, profile} = useProfile()
  const params = useParams<{type: string}>()
  console.log(params.type, profile, loading)
  if (loading) {
    return <IonProgressBar />
  }
  if (params.type === 'popular') {
    return <PopularLessonList />
  }
  if (params.type === 'new-uploads') {
    return <NewUploadsLessonList />
  }
  if (params.type === 'saved') {
    return <SavedLessonList />
  }

  return null
}
