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
import {ActivatedRoute} from '@angular/router'
import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import {SharedService} from 'src/app/services/shared.service'
import AppProvider from 'src/reactapp/AppProvider'
import CourseDetails from 'src/reactapp/pages/CourseDetailsPage'

const containerElementName = 'rcCourseDetails'

@Component({
  selector: 'app-course-details',
  // templateUrl: './course-details.page.html',
  template: `<div #${containerElementName}></div>`,
  styleUrls: ['./course-details.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CourseDetailsPage implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @ViewChild(containerElementName, {static: false}) containerRef: ElementRef
  lessonId
  type

  constructor(private route: ActivatedRoute, public sharedService: SharedService) {
    this.sharedService.gaTrackView('My Course Details Lessons Screen')
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
          <CourseDetails lessonId={this.lessonId} isDraft={this.type} />
        </AppProvider>,
        this.containerRef.nativeElement,
      )
    }
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.lessonId = params.lessonId
        this.type = params.type
        this.render()
      },
      (error) => {
        console.log(error)
      },
    )
  }
}
