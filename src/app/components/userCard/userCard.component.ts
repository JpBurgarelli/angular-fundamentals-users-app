// userCard.component.ts
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UserService } from '../../services/user.service';
import { IUser } from '../../models/user.model';
import { UserProfileModalComponent } from '../userModal/user-profile-modal.component';
import { FormsModule } from '@angular/forms';
import { SearchFilterComponent } from '../userSearch/user-search.component';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    FormsModule,
    SearchFilterComponent,
    MatProgressSpinnerModule
  ],
  templateUrl: './userCard.component.html',
  styleUrls: ['./userCard.component.scss'],
})
export class UserCard implements OnInit {
  users: IUser[] = [];
  filteredUsers: IUser[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(private userService: UserService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.isLoading = true;
    this.errorMessage = '';

    setTimeout(() => {
      this.userService.getUsers().subscribe({
        next: (data: IUser[]) => {
          this.users = data;
          this.filteredUsers = data;
          this.isLoading = false;
        },
        error: () => {
          this.errorMessage = 'Erro ao carregar usuários. Tente novamente.';
          this.isLoading = false;
        }
      });
    }, 1500);
  }

  onFilterChange(searchQuery: string): void {
    this.filteredUsers = this.users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  openUserProfile(user: IUser): void {
    this.dialog.open(UserProfileModalComponent, {
      width: '601px',
      data: user,
    });
  }
}
