import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
    selector: 'app-error-dialog',
    templateUrl: './error-dialog.component.html',
    styleUrl: './error-dialog.component.css',
    imports: [MatDialogModule]
})
export class ErrorDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {message: string}) { }
}
