import React from 'react'
import {SharedService} from './../../services/shared.service'
import {ProfilePictureComponent} from './profile-picture/profile-picture.component'
import {
  ModalController,
  LoadingController,
  ActionSheetController,
  Platform,
} from '@ionic/angular'
import {OnBoardingService} from './../../services/on-boarding.service'
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
import {Plugins, CameraResultType, CameraSource} from '@capacitor/core'
import {render, unmountComponentAtNode} from 'react-dom'
import AppProvider from 'src/reactapp/AppProvider'
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonModal,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonSkeletonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import {useGetProfileQuery} from 'src/reactapp/types-and-hooks'
import {cog, close} from 'ionicons/icons'
import {useStore} from 'src/reactapp/useStore'
import {ProfileAvatar} from './ProfileAvatar'
import UserLevel from 'src/reactapp/components/UserLevel'
import UserProgress from './UserProgress'

const containerElementName = 'rcProfilePage'

@Component({
  selector: 'app-profile',
  // templateUrl: './user-profile.page.html',
  template: `<div #${containerElementName}></div>`,
  styleUrls: ['./user-profile.page.scss', './user-level/user-level.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserProfilePage implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @ViewChild(containerElementName, {static: false}) containerRef: ElementRef

  // selectedSegment = 'progress'
  // profile
  // profilePicture = '../../../assets/images/profilePicture.svg'
  // isDesktop = false
  // imageBase64: any = ''

  constructor(
    public router: Router,
    public modalController: ModalController,
    private sharedService: SharedService,
    public onBoardingService: OnBoardingService,
    public actionSheetController: ActionSheetController,
    public platform: Platform,
    public loadingController: LoadingController,
  ) {
    // sharedService.getDeviceInfo().then((info) => {
    //   this.isDesktop = info.isDesktop
    //   this.sharedService.gaTrackView('Profile Screen')
    // })
  }

  ionViewWillEnter() {
    // this.sharedService.getDeviceInfo().then((info) => {
    //   this.isDesktop = info.isDesktop
    // })
    this.sharedService.gaTrackView('Profile Screen')
    // this.getUserProfile()
  }

  ngOnInit() {}

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
          <ReactProfilePage />
        </AppProvider>,
        this.containerRef.nativeElement,
      )
    }
  }

  // clickTab(event: Event, tab: string) {
  //   event.stopImmediatePropagation()
  //   this.router.navigate(['/dashboard/profile/' + tab])
  // }

  // segmentChanged(event) {
  //   this.selectedSegment = event.detail.value
  //   this.sharedService.gaTrackEvent('TabChangedProfile', this.selectedSegment)
  // }

  // async onUpdateProfilePicture() {
  //   if (this.isDesktop === true) {
  //     const modal = await this.modalController.create({
  //       component: ProfilePictureComponent,
  //     })
  //     await modal.present()
  //     return modal.onDidDismiss().then((res) => {
  //       if (res.data !== undefined) {
  //         this.uploadImageOnS3Bucket(res.data.profilePictureBase64)
  //       }
  //     })
  //   } else {
  //     this.selectImage()
  //   }
  // }

  // async uploadImageOnS3Bucket(base64) {
  //   this.sharedService.presentLoader('Please wait...')

  //   const params = {
  //     Key: this.profile._id.concat('-', new Date().getTime()).concat('', '.jpeg'),
  //     Body: base64,
  //   }

  //   this.onBoardingService.uploadProfilePicture(params).subscribe(
  //     (res) => {
  //       if (res.message) {
  //         this.getUserProfile()
  //         this.sharedService.presentToast(res.message)
  //         this.sharedService.dismissLoader()
  //       }
  //     },
  //     (error) => {
  //       console.log(error)
  //       this.sharedService.dismissLoader()
  //       this.sharedService.presentToast(error.error.message)
  //     },
  //   )
  // }

  // async takePicture(type) {
  //   this.imageBase64 = ''
  //   const image = await Plugins.Camera.getPhoto({
  //     quality: 20,
  //     allowEditing: true,
  //     resultType: CameraResultType.Base64,
  //     source: type === 'camera' ? CameraSource.Camera : CameraSource.Photos,
  //   })

  //   if (image.base64String) {
  //     const baseString = 'data:image/jpeg;base64,'
  //     this.uploadImageOnS3Bucket(baseString.concat('', image.base64String))
  //   }
  // }

  // async selectImage() {
  //   const actionSheet = await this.actionSheetController.create({
  //     header: 'Update profile picture',
  //     buttons: [
  //       {
  //         text: 'Use Camera',
  //         handler: () => {
  //           this.takePicture('camera')
  //         },
  //       },
  //       {
  //         text: 'Load from Library',
  //         handler: () => {
  //           this.takePicture('photos')
  //         },
  //       },
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //       },
  //     ],
  //   })
  //   await actionSheet.present()
  // }

  // getUserProfile() {
  //   try {
  //     this.onBoardingService.getUserProfile().subscribe(
  //       (res) => {
  //         this.profile = res.data
  //       },
  //       (error) => {
  //         console.log(error)
  //       },
  //     )
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
}

function ReactProfilePage() {
  // const {
  //   data: {profile},
  // } = useGetProfileQuery({fetchPolicy: 'cache-only'})
  const navController = useStore((state) => state.navController)
  const sharedService = useStore((state) => state.sharedService)
  const [segment, setSegment] = React.useState('progress')

  return (
    <IonPage className="profile-page">
      <IonContent>
        {/* <IonModal isOpen={showModal} mode="ios">
          <p>This is modal content</p>
          <IonButton onClick={() => setShowModal(false)}>Close Modal</IonButton>
        </IonModal> */}
        <IonGrid className="ion-no-padding">
          <IonRow className="ion-justify-content-center ion-margin-top">
            <IonCol
              sizeXs="2"
              sizeSm="2"
              sizeLg="3"
              sizeXl="2"
              sizeMd="3"
              className="ion-align-self-end"
            >
              {' '}
            </IonCol>
            <IonCol
              sizeXs="8"
              sizeSm="8"
              sizeLg="5"
              sizeXl="4"
              sizeMd="5"
              className="ion-align-self-center"
            >
              <ProfileAvatar />
            </IonCol>
            <IonCol
              sizeXs="2"
              sizeSm="2"
              sizeLg="3"
              sizeXl="2"
              sizeMd="3"
              className="ion-align-self-start"
            >
              <IonButtons
                className="ion-float-right"
                // mode="ios"
              >
                <IonButton
                  // routerLink="/setting"
                  // routerDirection="forward"
                  // onClick={() => setShowModal(true)}
                  // mode="ios"
                  onClick={() => {
                    navController.navigateForward('/setting')
                  }}
                >
                  <IonIcon color="dark" mode="ios" slot="icon-only" icon={cog} />
                </IonButton>
              </IonButtons>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol
              sizeXs="12"
              sizeSm="12"
              sizeLg="9"
              sizeXl="7"
              sizeMd="9"
              className="ion-no-padding ion-align-self-center"
            >
              <IonSegment
                color="danger"
                mode="md"
                value={segment}
                onIonChange={(e) => {
                  setSegment(e.detail.value)
                  sharedService.gaTrackEvent('TabChangedProfile', e.detail.value)
                }}
              >
                <IonSegmentButton mode="md" value="progress">
                  <IonLabel>My Progress</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton mode="md" value="level">
                  <IonLabel>My Level</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol
              sizeXs="12"
              sizeSm="12"
              sizeLg="7"
              sizeXl="6"
              sizeMd="8"
              className="ion-no-padding ion-align-self-center"
            >
              {segment === 'progress' ? <UserProgress /> : <UserLevel />}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}
