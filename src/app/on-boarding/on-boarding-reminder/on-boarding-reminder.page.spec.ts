import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {OnBoardingReminderPage} from './on-boarding-reminder.page'

describe('OnBoardingReminderPage', () => {
  let component: OnBoardingReminderPage
  let fixture: ComponentFixture<OnBoardingReminderPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OnBoardingReminderPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoardingReminderPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
