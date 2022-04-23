import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {SearchLessonsPage} from './search-lessons.page'

describe('SearchLessonsPage', () => {
  let component: SearchLessonsPage
  let fixture: ComponentFixture<SearchLessonsPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchLessonsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLessonsPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
