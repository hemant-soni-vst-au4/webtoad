import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {SavedLessonsPage} from './saved-lessons.page'

describe('SavedLessonsPage', () => {
  let component: SavedLessonsPage
  let fixture: ComponentFixture<SavedLessonsPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SavedLessonsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedLessonsPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
