import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
  IonText,
  isPlatform,
} from '@ionic/react'
import React from 'react'
import './OnBoardingPage.scss'

const slideOpts = {
  onlyExternal: false,
  initialSlide: 0,
  speed: 400,
  allowTouchMove: false,
  pager: false,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
}

function OnBoardingPage() {
  const ref = React.useRef<HTMLIonSlidesElement>(null)

  function slideNext() {
    ref.current?.slideNext()
  }

  return (
    <IonPage>
      <IonContent fullscreen className="on-boarding">
        <IonSlides ref={ref} pager={false} options={slideOpts}>
          <IonSlide>
            <SlideStep1 onNextClick={slideNext} />
          </IonSlide>

          <IonSlide>
            <SlideStep2 onNextClick={slideNext} />
          </IonSlide>
          <IonSlide>
            <SlideStep3 onNextClick={slideNext} />
          </IonSlide>

          <IonSlide>
            <SlideStep4 onNextClick={slideNext} />
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  )
}

const onBoardingCurriculums = [
  {
    image: '/assets/images/search/news.png',
    label: 'News',
    day: 'Monday',
  },
  {
    image: '/assets/images/search/general-english.png',
    label: 'General',
    day: 'Tuesday',
  },
  {
    image: '/assets/images/search/tv-shows-movies.png',
    label: 'TV Shows / Movies',
    day: 'Wednesday',
  },
  {
    image: '/assets/images/search/business-english.png',
    label: 'Business',
    day: 'Thursday',
  },
  {
    image: '/assets/images/search/speech.png',
    label: 'Speeches',
    day: 'Friday',
  },
  {
    image: '/assets/images/search/pop-songs.png',
    label: 'Pop Songs',
    day: 'Saturday / Sunday',
  },
]

interface SlideProps {
  onNextClick: (event: React.MouseEvent<HTMLIonButtonElement, MouseEvent>) => void
}

function SlideStep1({onNextClick}: SlideProps) {
  return (
    <IonGrid className="ion-padding on-boarding-step-1">
      <IonRow className="h-100 ion-align-items-center ion-justify-content-center">
        <IonCol
          sizeXs="12"
          sizeSm="12"
          sizeMd="10"
          sizeXl="8"
          sizeLg="8"
          className="ion-align-self-center"
        >
          <IonRow className="ion-align-items-center ion-justify-content-center">
            <IonCol
              sizeXs="8"
              sizeSm="8"
              sizeLg="5"
              sizeMd="5"
              sizeXl="3"
              className="ion-align-self-center"
            >
              <img
                className="mb-45"
                src="/assets/images/Speaky-Peaky-Logo.png"
                alt="start english now"
              />
            </IonCol>
          </IonRow>
          <IonRow className="ion-text-left ion-align-items-center ion-justify-content-center">
            <IonCol
              sizeXs="12"
              sizeSm="12"
              sizeMd="11"
              sizeLg="10"
              sizeXl="10"
              className="ion-align-self-center"
            >
              <h5 className="ion-padding-bottom">
                <strong>Hi, Welcome to Speaky Peaky!</strong>
              </h5>
              <p className="ion-padding-bottom">
                <IonRow className="ion-align-items-center ion-justify-content-center">
                  <IonCol size="2" className="ion-align-self-center ion-no-padding">
                    <IonImg src="/assets/images/check-mark.png" alt="check-mark"></IonImg>
                  </IonCol>
                  <IonCol size="10" className="ion-align-self-center ion-no-padding">
                    Listen to English correctly (using dictation training)
                  </IonCol>
                </IonRow>
              </p>
              <p className="ion-padding-bottom">
                <IonRow className="ion-align-items-center ion-justify-content-center">
                  <IonCol size="2" className="ion-align-self-center ion-no-padding">
                    <IonImg src="/assets/images/check-mark.png" alt="check-mark"></IonImg>
                  </IonCol>
                  <IonCol size="10" className="ion-align-self-center ion-no-padding">
                    Speak English confidently (through repetition and pronunciation
                    training)
                  </IonCol>
                </IonRow>
              </p>
              <p className="ion-padding-bottom">
                <IonRow className="ion-align-items-center ion-justify-content-center">
                  <IonCol size="2" className="ion-align-self-center ion-no-padding">
                    <IonImg src="/assets/images/check-mark.png" alt="check-mark"></IonImg>
                  </IonCol>
                  <IonCol size="10" className="ion-align-self-center ion-no-padding">
                    Embark on a journey to learn how to SPEAK in order to PEAK!
                  </IonCol>
                </IonRow>
              </p>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol
              sizeXs="12"
              sizeSm="12"
              sizeLg="6"
              sizeMd="6"
              sizeXl="5"
              className="ion-align-self-center"
            >
              <IonButton
                mode="ios"
                color="danger"
                shape="round"
                expand="block"
                onClick={onNextClick}
              >
                <strong>Let's Start!</strong>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonCol>
      </IonRow>
    </IonGrid>
  )
}

function SlideStep2({onNextClick}: SlideProps) {
  return (
    <IonGrid
      className="on-boarding-step-2"
      style={{height: '100vh', overflowY: 'scroll'}}
    >
      <IonRow className="h-100 ion-align-items-center ion-justify-content-center">
        <IonCol
          sizeXs="12"
          sizeSm="12"
          sizeMd="10"
          sizeXl="8"
          sizeLg="8"
          className="ion-align-self-center"
        >
          {isPlatform('desktop') && (
            <IonRow className="ion-align-items-center ion-justify-content-center">
              <IonCol sizeMd="1" sizeXl="1" className="ion-align-self-center">
                <img src="/assets/images/logo.png" alt="start english now" />
              </IonCol>
            </IonRow>
          )}

          <IonRow className="ion-justify-content-center">
            <IonCol
              sizeXs="12"
              sizeSm="12"
              sizeMd="11"
              sizeLg="10"
              sizeXl="10"
              className="ion-align-self-center"
            >
              <h1>
                <strong>Study with Our Daily Recommended Schedule</strong>
              </h1>
              <h5 className="ion-padding-bottom">
                Everyday we’ll recommend a video lesson for you at your level.
              </h5>

              {onBoardingCurriculums.map((cur) => (
                <IonRow
                  key={cur.day}
                  className="ion-align-items-center ion-justify-content-center"
                >
                  <IonCol
                    sizeXs="12"
                    sizeSm="12"
                    sizeMd="11"
                    sizeLg="10"
                    sizeXl="8"
                    className="ion-align-self-center"
                  >
                    <IonCard className="ion-no-margin" mode="ios">
                      <IonCardContent mode="ios">
                        <IonRow className="ion-align-items-center">
                          <IonCol size="3">
                            <img alt={cur.label} src={cur.image} />
                          </IonCol>
                          <IonCol size="9" className="ion-text-left">
                            <IonText className="day" color="dark">
                              <strong>{cur.day}</strong>
                            </IonText>
                            <br />
                            <IonText className="label" color="danger">
                              <strong>{cur.label}</strong>
                            </IonText>
                          </IonCol>
                        </IonRow>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                </IonRow>
              ))}
            </IonCol>
          </IonRow>

          <IonRow className="ion-margin-top ion-justify-content-center">
            <IonCol
              sizeXs="12"
              sizeSm="12"
              sizeLg="6"
              sizeMd="6"
              sizeXl="5"
              className="ion-align-self-center"
            >
              <IonButton
                mode="ios"
                color="danger"
                shape="round"
                expand="block"
                onClick={onNextClick}
              >
                <strong>COOL!</strong>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonCol>
      </IonRow>
    </IonGrid>
  )
}
function SlideStep3({onNextClick}: SlideProps) {
  return (
    <IonGrid className="on-boarding-step-2">
      <IonRow className="h-100 ion-align-items-center ion-justify-content-center">
        <IonCol
          sizeXs="12"
          sizeSm="12"
          sizeMd="10"
          sizeXl="8"
          sizeLg="8"
          className="ion-align-self-center"
        >
          {isPlatform('desktop') && (
            <IonRow className="ion-align-items-center ion-justify-content-center">
              <IonCol sizeMd="1" sizeXl="1" className="ion-align-self-center">
                <img src="/assets/images/logo.png" alt="start english now" />
              </IonCol>
            </IonRow>
          )}

          <IonRow className="ion-padding ion-justify-content-center">
            <IonCol
              sizeXs="12"
              sizeSm="12"
              sizeMd="11"
              sizeLg="10"
              sizeXl="8"
              className="ion-align-self-center"
            >
              <h1>
                <strong>Each video lesson includes the following steps:</strong>
              </h1>

              <img
                className="mt-45 mb-45 on-boarding-success-path"
                src="/assets/images/on-boarding-success-path.gif"
                alt="on-boarding-success-path"
              />
            </IonCol>
          </IonRow>

          <IonRow className="ion-justify-content-center">
            <IonCol
              sizeXs="12"
              sizeSm="12"
              sizeLg="7"
              sizeMd="6"
              sizeXl="5"
              className="ion-align-self-center"
            >
              <IonButton
                mode="ios"
                color="danger"
                shape="round"
                expand="block"
                onClick={onNextClick}
              >
                <strong>GOT IT</strong>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonCol>
      </IonRow>
    </IonGrid>
  )
}

function SlideStep4({onNextClick}: SlideProps) {
  return (
    <IonGrid className="on-boarding-step-2">
      <IonRow className="h-100 ion-align-items-center ion-justify-content-center">
        <IonCol
          sizeXs="12"
          sizeSm="12"
          sizeMd="10"
          sizeXl="8"
          sizeLg="8"
          className="ion-align-self-center"
        >
          <IonRow className="ion-align-items-center ion-justify-content-center">
            <IonCol
              sizeXs="8"
              sizeSm="8"
              sizeLg="4"
              sizeMd="4"
              sizeXl="3"
              className="ion-align-self-center"
            >
              <img className="mb-45" src="/assets/images/Speaky-Peaky-Logo.png" />
            </IonCol>
          </IonRow>

          <IonRow className="ion-align-items-center ion-justify-content-center ion-text-center mb-45">
            <IonCol
              sizeXs="12"
              sizeSm="12"
              sizeLg="12"
              sizeMd="12"
              sizeXl="12"
              className="ion-align-self-center"
            >
              <h1 className="ion-text-center">
                <strong>Create Account</strong>
              </h1>
              <p>
                <IonText color="medium">to get 5 free lessons today</IonText>
              </p>
            </IonCol>
          </IonRow>

          <IonRow className="ion-align-items-center ion-justify-content-center">
            <IonCol
              sizeXs="12"
              sizeSm="12"
              sizeLg="7"
              sizeMd="6"
              sizeXl="5"
              className="ion-align-self-center"
            >
              <IonButton
                mode="ios"
                color="danger"
                shape="round"
                expand="block"
                routerLink="/login"
                // routerLinkActive="router-link-active"
              >
                <strong>SIGN UP</strong>
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow className="ion-align-items-center ion-justify-content-center">
            <IonCol
              sizeXs="12"
              sizeSm="12"
              sizeLg="7"
              sizeMd="6"
              sizeXl="5"
              className="ion-align-self-center"
            >
              <IonButton
                mode="ios"
                color="danger"
                shape="round"
                expand="block"
                fill="outline"
                routerDirection="forward"
                routerLink="/login"
              >
                I ALREADY HAVE AN ACCOUNT
              </IonButton>
            </IonCol>
          </IonRow>
        </IonCol>
      </IonRow>
    </IonGrid>
  )
}
