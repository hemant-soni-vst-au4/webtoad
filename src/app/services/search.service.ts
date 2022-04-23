import {Platform} from '@ionic/angular'
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {ApiService} from './api.service'

@Injectable()
export class SearchService {
  constructor(public apiService: ApiService) {}

  getSuggestedCurriculums(): Observable<any> {
    return this.apiService.get('/lesson/suggested-curriculum/')
  }

  getTopicLessonsByUserLevel(page, data): Observable<any> {
    return this.apiService.post(`/lesson/get-lessons/${page}`, data)
  }

  searchLessons(page, data): Observable<any> {
    return this.apiService.post(`/lesson/search-lessons/${page}`, data)
  }
}
