import React from 'react'
import {
  Link,
  matchPath,
  Redirect,
  Route,
  useLocation,
  useRouteMatch,
} from 'react-router-dom'
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonImg,
  IonLabel,
  IonPage,
  IonRouterLink,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  isPlatform,
} from '@ionic/react'
import {Box} from '@chakra-ui/react'

import {
  DesktopTabBar,
  LessonIcon,
  LibraryIcon,
  ProfileIcon,
  ReviewIcon,
} from '../components/DesktopTabBar'
import LessonsPage from './LessonsPage'
// import LibraryPage from './LibraryPage'
// import ProfilePage from './ProfilePage'
// import ReviewPage from './ReviewPage'
import './DashboardPage.scss'

function LessonDetailPage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lesson Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Lesson Detail</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton>Link</IonButton>
      </IonContent>
    </IonPage>
  )
}
function LessonsPage2() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>LessonsPage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">LessonsPage</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <Box lineHeight="3" fontSize="20">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias nemo libero
          omnis natus dolor, iusto, cumque numquam consequatur sed est quos minus placeat
          voluptas tempore asperiores cum ratione ad! Laborum.
        </Box>
        <Box lineHeight="3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias nemo libero
          omnis natus dolor, iusto, cumque numquam consequatur sed est quos minus placeat
          voluptas tempore asperiores cum ratione ad! Laborum.
        </Box>
        <IonButton routerLink="/home" routerDirection="forward">
          Link to Detail
        </IonButton>
      </IonContent>
    </IonPage>
  )
}
function LibraryPage() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>LibraryPage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonButton>Link</IonButton>
      </IonContent>
    </IonPage>
  )
}

function MobileDashboardPage() {
  const location = useLocation()
  const match = useRouteMatch()

  const curTab = matchPath(location.pathname, {
    path: `${match.url}/:tab`,
    exact: true,
  })?.params['tab']

  return (
    <>
      <IonTabs>
        <IonRouterOutlet>
          <Route path={`${match.url}/:tab(lessons)`} component={LessonsPage} exact />
          <Route path={`${match.url}/detail`} component={LessonsPage} exact />
          <Route path={`${match.url}/:tab(library)`} component={LibraryPage} exact />
          {/* <Route path={`${match.url}/:tab(review)`} component={ReviewPage} exact />
          <Route path={`${match.url}/:tab(profile)`} component={ProfilePage} exact /> */}
          <Redirect from="/dashboard/" exact to="/dashboard/lessons" />
        </IonRouterOutlet>

        <IonTabBar mode="md" slot="bottom">
          <IonTabButton tab="lessons" href="/dashboard/lessons">
            <LessonIcon active={curTab === 'lessons'} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="library" href="/dashboard/library">
            <LibraryIcon active={curTab === 'library'} />
            <IonLabel>Library</IonLabel>
          </IonTabButton>

          <IonTabButton tab="review" href="/dashboard/review">
            <ReviewIcon active={curTab === 'review'} />
            <IonLabel>Review</IonLabel>
          </IonTabButton>

          <IonTabButton tab="profile" href="/dashboard/profile">
            <ProfileIcon active={curTab === 'profile'} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </>
  )
}

function DesktopDashboardPage() {
  const location = useLocation()
  const match = useRouteMatch()

  const curTab = matchPath(location.pathname, {
    path: `${match.url}/:tab`,
    exact: true,
  })?.params['tab']

  return (
    <>
      {/* <IonHeader> */}
      <IonToolbar>
        <IonRouterLink
          className="speaky-peaky-logo ion-no-margin"
          // fill="clear"
          // style={{height: '60px', zIndex: 102}}
          routerLink="/dashboard/lessons"
          routerDirection="root"
          //  [routerLink]="['/dashboard/lessons']"
          // routerLinkActive="router-link-active"
        >
          <IonImg src="../../assets/images/speaky-peaky_logo.png"></IonImg>
        </IonRouterLink>
      </IonToolbar>
      {/* </IonHeader> */}
      <IonContent>
        <IonTabs>
          <IonRouterOutlet>
            <Route path={`${match.url}/:tab(lessons)`} component={LessonsPage} exact />
            {/* <Route path={`${match.url}/:tab(library)`} component={LibraryPage} exact /> */}
            {/* <Route path={`${match.url}/:tab(review)`} component={ReviewPage} exact />
          <Route path={`${match.url}/:tab(profile)`} component={ProfilePage} exact /> */}
            <Redirect from="/dashboard/" exact to="/dashboard/lessons" />
          </IonRouterOutlet>

          <IonTabBar mode="md" slot="top" hidden={isPlatform('mobile')}>
            <IonTabButton tab="lessons" href="/dashboard/lessons">
              <LessonIcon active={curTab === 'lessons'} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>

            <IonTabButton tab="library" href="/dashboard/library">
              <LibraryIcon active={curTab === 'library'} />
              <IonLabel>Library</IonLabel>
            </IonTabButton>

            <IonTabButton tab="review" href="/dashboard/review">
              <ReviewIcon active={curTab === 'review'} />
              <IonLabel>Review</IonLabel>
            </IonTabButton>

            <IonTabButton tab="profile" href="/dashboard/profile">
              <ProfileIcon active={curTab === 'profile'} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonContent>
    </>
  )
}
export default function DashboardPage() {
  const location = useLocation()
  const match = useRouteMatch()

  const curTab = matchPath(location.pathname, {
    path: `${match.url}/:tab`,
    exact: true,
  })?.params['tab']

  if (isPlatform('mobile')) {
    return <MobileDashboardPage />
  }
  return <DesktopDashboardPage />
}
