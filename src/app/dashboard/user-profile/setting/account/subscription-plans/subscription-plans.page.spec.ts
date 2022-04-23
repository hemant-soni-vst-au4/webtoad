import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {SubscriptionPlansPage} from './subscription-plans.page'

describe('SubscriptionPlansPage', () => {
  let component: SubscriptionPlansPage
  let fixture: ComponentFixture<SubscriptionPlansPage>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriptionPlansPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionPlansPage)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
