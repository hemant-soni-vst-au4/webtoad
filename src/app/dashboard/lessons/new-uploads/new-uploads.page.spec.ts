import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {NewUploadsPage} from './new-uploads.page'

describe('NewUploadsPage', () => {
  let component: NewUploadsPage
  let fixture: ComponentFixture<NewUploadsPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewUploadsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUploadsPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
