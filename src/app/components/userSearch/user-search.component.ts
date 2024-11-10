import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss'],
})

export class SearchFilterComponent {
  searchQuery: string = '';
  @Output() filterChange = new EventEmitter<string>();

  onSearch(): void {
    this.filterChange.emit(this.searchQuery);
  }
}

