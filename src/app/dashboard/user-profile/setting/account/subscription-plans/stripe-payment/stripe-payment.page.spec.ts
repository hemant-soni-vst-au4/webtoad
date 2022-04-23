import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {StripePaymentPage} from './stripe-payment.page'

describe('StripePaymentPage', () => {
  let component: StripePaymentPage
  let fixture: ComponentFixture<StripePaymentPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StripePaymentPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(StripePaymentPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
