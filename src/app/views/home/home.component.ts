import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VideoFormDialogComponent } from './video-form-dialog/video-form-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private dialog: MatDialog) {}

  addVideo(): void {
    const dialogRef = this.dialog.open(VideoFormDialogComponent, {
      minWidth: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
