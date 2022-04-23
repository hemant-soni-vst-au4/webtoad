import {NavController, Platform} from '@ionic/angular'
import {Router} from '@angular/router'
import {SharedService} from './../../services/shared.service'
import {OnBoardingService} from './../../services/on-boarding.service'
import {Component, OnInit, ViewChild} from '@angular/core'
import {AlertController} from '@ionic/angular'
import {NgxY2PlayerOptions, NgxY2PlayerComponent} from 'ngx-y2-player'

@Component({
  selector: 'app-on-boarding-level',
  templateUrl: './on-boarding-level.page.html',
  styleUrls: ['./on-boarding-level.page.scss'],
})
export class OnBoardingLevelPage implements OnInit {
  @ViewChild('video', {static: false}) video: NgxY2PlayerComponent
  isDesktop = false

  playerOptions: NgxY2PlayerOptions = {
    playerVars: {
      autohide: 1,
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      enablejsapi: 1,
      modestbranding: 1,
      playsinline: 1,
      rel: 0,
      showinfo: 0,
      // origin: 'https://www.youtube.com',
    },
  }

  youTubeId
  levels = []
  currentLevel: any
  selectedLevel

  constructor(
    public onBoardingService: OnBoardingService,
    public router: Router,
    public alertController: AlertController,
    public navController: NavController,
    public platform: Platform,
    public sharedService: SharedService,
  ) {
    sharedService.getDeviceInfo().then((info) => {
      this.isDesktop = info.isDesktop
    })
    this.sharedService.gaTrackView('On-Boarding Select Level Screen')
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.userGuid()
    this.levelList()
  }

  userGuid() {
    try {
      this.onBoardingService.userGuid({language: 'eng'}).subscribe(
        (res) => {
          const {youtubeId} = res.data

          this.youTubeId = youtubeId
        },
        (error) => {
          // this.sharedService.presentToast( error );
        },
      )
    } catch (error) {
      console.log(error)
    }
  }

  levelList() {
    try {
      this.onBoardingService.levelList().subscribe(
        async (res) => {
          // console.log( res );

          this.levels = res.data
          // this.currentLevel = res.levelId;
          // this.selectedLevel = this.currentLevel.userLevelId;

          const alert = await this.alertController.create({
            subHeader: 'Welcome! Your account has been successfully created.',
            message:
              "<div><strong>Notes:</strong><div><div>1) We've have given you 5 free trial lessons.</div><div>2) Check your email to verify that you're real.</div>",
            cssClass: 'on-boarding-alert',
            buttons: ['OK'],
          })

          await alert.present()
        },
        (error) => {
          console.log(error)
        },
      )
    } catch (error) {
      console.log(error)
    }
  }

  selectLevel(event) {
    if (event) {
      this.currentLevel = {}
      this.currentLevel['userLevelId'] = event

      const findLevel = this.levels.find(
        (level) => level.id === this.currentLevel['userLevelId'],
      )

      this.sharedService.gaTrackEvent('SelectedLevel', findLevel.name)

      if (findLevel.name === 'Elementary') {
        this.currentLevel['name'] = 'Upper-beginner'
      } else {
        this.currentLevel['name'] = findLevel.name
      }
    }
  }

  onChangeLevel(level) {
    if (level.name === 'Elementary') {
      this.currentLevel['name'] = 'Upper-beginner'
    } else {
      this.currentLevel['name'] = level.name
    }
  }

  nextQuestion() {
    this.video.videoPlayer.pauseVideo()

    try {
      this.onBoardingService.changeLevel(this.currentLevel).subscribe(
        async (res) => {
          this.navController.setDirection('forward')
          this.router.navigate(['/on-boarding-language'])
          this.sharedService.gaTrackEvent(
            'LevelNextQuestion',
            '{"Screen":"Select Level Screen","selection":"Next"}',
          )
        },
        (error) => {
          console.log(error)
        },
      )
    } catch (error) {
      console.log(error)
    }
  }

  onReady(event) {
    if (event.target) {
      // event.target.playVideo();
    }
  }

  onStateChange(event) {
    // console.log( event );
  }
}
