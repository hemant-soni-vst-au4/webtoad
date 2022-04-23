import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  @Input() courseList = new Array()
  @Input() isCourseList = false
  @Output() courseAction = new EventEmitter()
  @Output() expandItemAction = new EventEmitter()

  constructor() {}

  ngOnInit() {}

  onCourseDetails(course, event) {
    event.stopPropagation()
    this.courseAction.emit(course)
  }

  onExpandItem(course, event) {
    event.stopPropagation()
    this.expandItemAction.emit(course)
  }
}
