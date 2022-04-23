import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {OnBoardingLevelPage} from './on-boarding-level.page'

describe('OnBoardingLevelPage', () => {
  let component: OnBoardingLevelPage
  let fixture: ComponentFixture<OnBoardingLevelPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OnBoardingLevelPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoardingLevelPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
