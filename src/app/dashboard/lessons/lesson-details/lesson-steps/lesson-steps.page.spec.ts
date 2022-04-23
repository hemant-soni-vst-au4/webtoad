import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {LessonStepsPage} from './lesson-steps.page'

describe('LessonStepsPage', () => {
  let component: LessonStepsPage
  let fixture: ComponentFixture<LessonStepsPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LessonStepsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonStepsPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
