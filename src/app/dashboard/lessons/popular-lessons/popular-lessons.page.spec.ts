import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {PopularLessonsPage} from './popular-lessons.page'

describe('PopularLessonsPage', () => {
  let component: PopularLessonsPage
  let fixture: ComponentFixture<PopularLessonsPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PopularLessonsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularLessonsPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
