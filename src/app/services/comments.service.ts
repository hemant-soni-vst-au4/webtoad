import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {ApiService} from './api.service'

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(public apiService: ApiService) {}

  getCommentsBySubLessonId(page, data): Observable<any> {
    return this.apiService.post('/comments/list/' + page, data)
  }

  saveCommentBySubLessonId(data): Observable<any> {
    return this.apiService.post('/comments/user/save/', data)
  }

  likeComment(data): Observable<any> {
    return this.apiService.post('/comments/user/like/', data)
  }

  disLikeComment(data): Observable<any> {
    return this.apiService.post('/comments/user/dislike/', data)
  }

  getCommentRepliesBySubLessonId(page, data): Observable<any> {
    return this.apiService.post('/comments/reply-list/' + page, data)
  }

  saveCommentReplyBySubLessonId(data): Observable<any> {
    return this.apiService.post('/comments/user/reply/', data)
  }

  editComment(data): Observable<any> {
    return this.apiService.post('/comments/edit/', data)
  }

  deleteComment(data): Observable<any> {
    return this.apiService.post('/comments/delete/', data)
  }

  editReply(data): Observable<any> {
    return this.apiService.post('/comments/reply-edit/', data)
  }

  deleteReply(data): Observable<any> {
    return this.apiService.post('/comments/reply-delete/', data)
  }
}
