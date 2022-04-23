import {ModalController, NavParams} from '@ionic/angular'
import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-user-note',
  templateUrl: './user-note.component.html',
  styleUrls: ['./user-note.component.scss'],
})
export class UserNoteComponent implements OnInit {
  userNote: any

  constructor(public modalController: ModalController, private navParams: NavParams) {
    this.userNote = this.navParams.get('userNote')
  }

  ngOnInit() {}

  onDismiss() {
    this.modalController.dismiss()
  }
}
