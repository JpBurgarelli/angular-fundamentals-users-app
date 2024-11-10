import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { IUser } from '../../models/user.model';
import { UserProfileModalComponent } from '../userModal/user-profile-modal.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'user-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, FormsModule],
  templateUrl: './userCard.component.html',
  styleUrls: ['./userCard.component.scss'],
})
export class UserCard implements OnInit {
  users: IUser[] = [];
  filteredUsers: IUser[] = [];
  searchQuery: string = '';

  constructor(private userService: UserService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data: IUser[]) => {
        this.users = data;
        this.filteredUsers = data;
      },
      (error) => {
        console.log('Erro na busca pelos usuários!', error);
      }
    );
  }

  filterUsers(): void {
    this.filteredUsers = this.users.filter((user) =>
      user.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  openUserProfile(user: IUser): void {
    this.dialog.open(UserProfileModalComponent, {
      width: '601px',
      data: user,
    });
  }
}

