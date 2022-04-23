import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import {SharedService} from 'src/app/services/shared.service'
import AppProvider from 'src/reactapp/AppProvider'
import UserLevel from 'src/reactapp/components/UserLevel'

const containerElementName = 'rcUserLevel'

@Component({
  selector: 'app-user-level',
  template: `<div #${containerElementName}></div>`,
  styleUrls: ['./user-level.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserLevelPage implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @ViewChild(containerElementName, {static: false}) containerRef: ElementRef

  constructor(public sharedService: SharedService) {
    this.sharedService.gaTrackView('Profile User Level')
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.render()
  }

  ngAfterViewInit() {
    this.render()
  }

  ngOnDestroy() {
    unmountComponentAtNode(this.containerRef.nativeElement)
  }

  private render() {
    if (this.containerRef) {
      render(
        <AppProvider>
          <UserLevel />
        </AppProvider>,
        this.containerRef.nativeElement,
      )
    }
  }

  ngOnInit() {
    // this.render()
  }
}
