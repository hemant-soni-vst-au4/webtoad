import {ModalController} from '@ionic/angular'
import {Component, OnInit} from '@angular/core'
import {Plugins, CameraResultType, CameraSource} from '@capacitor/core'
import {ImageCroppedEvent} from 'ngx-image-cropper'

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss'],
})
export class ProfilePictureComponent implements OnInit {
  imageChangedEvent: any = ''
  croppedImage: any = ''
  imageBase64: any = ''
  isCropperReady = false

  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  async takePicture() {
    this.imageBase64 = ''
    this.isCropperReady = false
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
      correctOrientation: true,
    })

    if (image.base64String) {
      const baseString = 'data:image/jpeg;base64,'
      this.imageBase64 = baseString.concat('', image.base64String)
      this.isCropperReady = true
    }
  }

  onSelectProfile(event: any): void {
    if (event.target.files.item(0)) {
      this.Main(event.target.files.item(0))
        .then((base64) => {
          this.imageBase64 = base64
          this.isCropperReady = true
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })

  async Main(file) {
    const result = await this.toBase64(file).catch((e) => e)
    if (result instanceof Error) {
      console.log('Error: ', result.message)
      return
    }
    return result
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64
  }

  imageLoaded(event) {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  onSubmit() {
    this.modalController.dismiss({profilePictureBase64: this.croppedImage})
  }
  /*
   * dismiss modal
   * */
  dismiss() {
    this.modalController.dismiss()
  }
}
