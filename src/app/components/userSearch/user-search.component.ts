import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-search',
  standalone: true,
  imports: [],
  templateUrl: './user-search.component.html',
  styleUrl: './user-search.component.scss'
})
export class UserSearchComponent {
  searchQuery: string = '';

  @Output() searchQueryChanged: EventEmitter<string> = new EventEmitter();

  onSearchChange(): void {
    this.searchQueryChanged.emit(this.searchQuery);
  }

}
