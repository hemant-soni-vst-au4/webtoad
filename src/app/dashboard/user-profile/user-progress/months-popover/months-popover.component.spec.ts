import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'
import {async, ComponentFixture, TestBed} from '@angular/core/testing'

import {MonthsPopoverComponent} from './months-popover.component'

describe('MonthsPopoverComponent', () => {
  let component: MonthsPopoverComponent
  let fixture: ComponentFixture<MonthsPopoverComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MonthsPopoverComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthsPopoverComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
