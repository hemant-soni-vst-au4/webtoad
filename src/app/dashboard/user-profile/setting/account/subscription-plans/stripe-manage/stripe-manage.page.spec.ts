import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {StripeManagePage} from './stripe-manage.page'

describe('StripeManagePage', () => {
  let component: StripeManagePage
  let fixture: ComponentFixture<StripeManagePage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StripeManagePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeManagePage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
