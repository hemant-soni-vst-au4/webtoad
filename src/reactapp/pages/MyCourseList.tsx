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
  IonRow,
  IonSkeletonText,
  IonText,
  IonThumbnail,
} from '@ionic/react'
import {chevronForward} from 'ionicons/icons'
import React from 'react'
import useFetch, {CachePolicies} from 'use-http'
import AppHeader from '../components/AppHeader'
import './MyCourseList.scss'

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
                {list.map((course) => (
                  <IonItem
                    key={course._id}
                    // [routerLink]="['/lesson-details', item.subLessonId, false, false]"
                    // routerLinkActive="router-link-active"
                    routerLink={`/lesson/course/${course._id}`}
                    routerDirection="forward"
                    mode="md"
                  >
                    <IonThumbnail slot="start">
                      <IonImg src={course.thumbnail}></IonImg>
                    </IonThumbnail>

                    <IonLabel>
                      <h2 className="ion-text-wrap">
                        {course.title || course.introduction}
                      </h2>

                      <IonText color="medium">
                        <p>
                          <IonText
                          //  *ngIf="lesson?.subLessons.length === 1; else multiple"
                          >
                            {course.subLessons.length === 1
                              ? 'Single -'
                              : `${course.subLessons.length} episode -`}
                          </IonText>
                          {course.videoLevel}
                        </p>
                      </IonText>
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
                // disabled={courses.length >= data.totalLessons}
                disabled={loading}
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

export default function MyCourseList() {
  const [page, setPage] = React.useState(1)
  const {loading, error, data = []} = useFetch(
    `/lesson/my-course`,
    {
      onNewData: (list = [], newDatas) => {
        return newDatas.data
      },
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
    // const nextPage = Math.round(lessons.length / 10) + 1
    // setPage(nextPage)
    e.target.complete()
  }

  return (
    <ListView
      title="MyCourses"
      list={lessons}
      loading={loading}
      onInfinite={handleInfinite}
    />
  )
}
