import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../model/video.model';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  apiUrl = 'http://localhost:8080/videos';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  public getVideos(): Observable<Video[]> {
    return this.httpClient.get<Video[]>(this.apiUrl);
  }

  public postVideo(video: any): Observable<Video> {
    return this.httpClient.post<any>(this.apiUrl, video, this.httpOptions);
  }
}
