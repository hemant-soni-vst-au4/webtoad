import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {EmailTheTeamPage} from './email-the-team.page'

describe('EmailTheTeamPage', () => {
  let component: EmailTheTeamPage
  let fixture: ComponentFixture<EmailTheTeamPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmailTheTeamPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailTheTeamPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
