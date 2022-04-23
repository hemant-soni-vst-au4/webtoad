import React from 'react'
import {Redirect, Route, useHistory} from 'react-router-dom'
import {
  IonApp,
  IonPage,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonRadioGroup,
  IonCard,
  IonCardContent,
  IonButton,
  IonItem,
  IonRadio,
  IonInput,
  IonText,
  IonIcon,
  IonAlert,
  IonLoading,
  useIonRouter,
} from '@ionic/react'

// import {IonReactRouter} from '@ionic/react-router'
import {ellipse, square, eye, eyeOff} from 'ionicons/icons'
import {Link} from 'react-router-dom'
import {Formik, useFormik} from 'formik'
import * as yup from 'yup'
import useFetch from 'use-http'
// import {useLocalStorage, writeStorage} from '@rehooks/local-storage'
import './LoginPage.scss'
import {setNativeStorage} from './nativeStorage'
import {Plugins, Device} from '@capacitor/core'

let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(1).required(),
})

const API_URL = 'http://localhost:4043/api/v1'

export default function LoginPage() {
  const {get, post, cache, response, loading, error} = useFetch()

  const router = useIonRouter()
  const history = useHistory()
  const [showPw, setShowPw] = React.useState(false)
  const [alertMessage, setAlertMessage] = React.useState<string | null | undefined>()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values, {setSubmitting}) => {
      Device.getInfo().then((info) => {
        const userPlatform = `${info.manufacturer} ( ${info.platform} ) ${info.model} ( ${info.osVersion} ) - ${info.appVersion}`
        cache.clear()
        post('/user/authenticate', {...values, loginType: 'Email', userPlatform})
          .then((res) => {
            if (res.error) {
              throw Error(res.error)
            }
            setSubmitting(false)
            setNativeStorage('token', res.token)
            router.push('/dashboard', 'root')
            // writeStorage('token', res.token)
            // history.push('/dashboard')
          })
          .catch((err) => {
            console.log(err)
            setAlertMessage(err.message)
            setSubmitting(false)
          })
        // signIn({variables: {cred: {...values, userPlatform}}})
        //   .then(result => {
        //     setSubmitting(false)
        //     history.push('/dashboard')
        //   })
        //   .catch(error => {
        //     setSubmitting(false)
        //     setAlertMessage(error.graphQLErrors[0].message)
        //   })
      })
    },
  })
  console.log('error', error)

  return (
    <IonPage>
      <IonContent scrollY={false}>
        <IonLoading isOpen={formik.isSubmitting} message={'Please wait...'} />
        <IonAlert
          isOpen={!!alertMessage}
          onDidDismiss={() => setAlertMessage(undefined)}
          header="Alert"
          message={String(alertMessage)}
          buttons={['OK']}
        />
        <IonGrid className="ion-padding ">
          <IonRow className="ion-align-items-center ">
            <IonCol className="ion-align-self-center">
              <IonRow className="ion-justify-content-center">
                <IonCol
                  sizeXs="8"
                  sizeSm="8"
                  sizeLg="4"
                  sizeMd="4"
                  sizeXl="2"
                  className="ion-align-self-center"
                >
                  <img src="/assets/images/Speaky-Peaky-Logo.png" />
                </IonCol>
              </IonRow>

              <form onSubmit={formik.handleSubmit}>
                <IonRow className="ion-justify-content-center">
                  <IonCol
                    className="ion-align-self-center"
                    sizeXs="12"
                    sizeSm="12"
                    sizeLg="5"
                    sizeXl="4"
                    sizeMd="6"
                  >
                    <IonRow>
                      <IonCol size="12">
                        <IonItem mode="ios" className="ion-no-padding auth-inputs">
                          <IonLabel position="floating">Email</IonLabel>
                          <IonInput
                            type="email"
                            required
                            autofocus
                            inputMode="email"
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                formik.handleSubmit()
                              }
                            }}
                            onIonBlur={() => formik.setFieldTouched('email')}
                            onIonChange={(e) =>
                              formik.setFieldValue('email', e.detail.value)
                            }
                            value={formik.values.email}
                          ></IonInput>
                        </IonItem>
                        {formik.errors.email && (
                          <IonText color="danger">
                            <small>Please enter a valid email.</small>
                          </IonText>
                        )}
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <IonItem mode="ios" className="ion-no-padding auth-inputs">
                          <IonLabel position="floating">Password</IonLabel>
                          {/* <IonInput value="test" /> */}
                          <IonInput
                            type={showPw ? 'text' : 'password'}
                            required
                            enterkeyhint="enter"
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                formik.handleSubmit()
                              }
                            }}
                            value={formik.values.password}
                            onIonBlur={() => formik.setFieldTouched('password')}
                            onIonChange={(e) =>
                              formik.setFieldValue('password', e.detail.value)
                            }
                          ></IonInput>
                          <IonIcon
                            onClick={() => setShowPw((v) => !v)}
                            className="pwd-btn"
                            slot="end"
                            icon={showPw ? eye : eyeOff}
                          ></IonIcon>
                        </IonItem>
                        {formik.errors.password && (
                          <IonText color="danger">
                            <small>Please enter a password.</small>
                          </IonText>
                        )}

                        <p>
                          <Link className="ion-text-right c-orange" to="/forgot-password">
                            Forgot Password?
                          </Link>
                        </p>
                      </IonCol>
                    </IonRow>
                    <IonRow className="ion-margin-top">
                      <IonCol size="12">
                        <IonButton
                          mode="ios"
                          color="danger"
                          shape="round"
                          expand="block"
                          type="submit"
                          disabled={
                            loading ||
                            !formik.dirty ||
                            !formik.isValid ||
                            formik.isSubmitting
                          }
                        >
                          <strong>SIGN IN</strong>
                        </IonButton>
                      </IonCol>
                    </IonRow>
                    <IonRow>
                      <IonCol size="12">
                        <p className="ion-text-center ion-no-margin">
                          Don’t have an account?
                          <Link className="c-orange" to="/sign-up">
                            Sign up
                          </Link>
                          here.
                        </p>
                      </IonCol>
                    </IonRow>
                  </IonCol>
                </IonRow>
              </form>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}
