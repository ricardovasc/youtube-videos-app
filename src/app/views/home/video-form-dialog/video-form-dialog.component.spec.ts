import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoFormDialogComponent } from './video-form-dialog.component';

describe('VideoFormDialogComponent', () => {
  let component: VideoFormDialogComponent;
  let fixture: ComponentFixture<VideoFormDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoFormDialogComponent]
    });
    fixture = TestBed.createComponent(VideoFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
