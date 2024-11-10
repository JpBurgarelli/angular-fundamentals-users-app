import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'app-user-profile-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule],
  templateUrl: './user-profile-modal.component.html',
  styleUrl: './user-profile-modal.component.scss'
})
export class UserProfileModalComponent {
  constructor(
    public dialogRef: MatDialogRef<UserProfileModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IUser
  ) { }
}
