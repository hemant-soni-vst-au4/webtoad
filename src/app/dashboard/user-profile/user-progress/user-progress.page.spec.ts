import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {UserProgressPage} from './user-progress.page'

describe('UserProgressPage', () => {
  let component: UserProgressPage
  let fixture: ComponentFixture<UserProgressPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserProgressPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProgressPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
