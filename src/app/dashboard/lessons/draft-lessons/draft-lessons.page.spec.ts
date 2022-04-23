import {async, ComponentFixture, TestBed} from '@angular/core/testing'
import {IonicModule} from '@ionic/angular'

import {DraftLessonsPage} from './draft-lessons.page'

describe('DraftLessonsPage', () => {
  let component: DraftLessonsPage
  let fixture: ComponentFixture<DraftLessonsPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DraftLessonsPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents()

    fixture = TestBed.createComponent(DraftLessonsPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  }))

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
