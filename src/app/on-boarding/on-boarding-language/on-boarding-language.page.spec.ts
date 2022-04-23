import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {OnBoardingLanguagePage} from './on-boarding-language.page'

describe('OnBoardingLanguagePage', () => {
  let component: OnBoardingLanguagePage
  let fixture: ComponentFixture<OnBoardingLanguagePage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OnBoardingLanguagePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(OnBoardingLanguagePage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
