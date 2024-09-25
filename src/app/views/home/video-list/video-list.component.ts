import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from 'src/app/shared/model/video.model';
import { VideoService } from 'src/app/shared/service/video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
})
export class VideoListComponent {
  sbcVideos: Video[] = [];

  constructor(
    public videoService: VideoService,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos() {
    this.videoService.getVideos().subscribe((data) => {
      this.sbcVideos = data;

      this.sbcVideos.forEach((video) => {
        video.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(
          video.link
        );
      });
    });
  }
}
