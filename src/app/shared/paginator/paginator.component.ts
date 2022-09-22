import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  currentPages = [];
  totalPages = [];
  activePage = 1;
  @Input() items = [];
  @Output() itemsToShow = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    if (this.items && this.items.length > 0) {
      for (let i = 0; i < this.items.length / 3; i++) {
        this.totalPages.push(i + 1);
      }

      const iterations = this.totalPages.length % 3;

      const pages = [];
      for (let i = 0; i < (iterations === 0 ? 3 : iterations); i++) {
        pages.push(this.totalPages[i]);
      }

      this.currentPages = pages;

      this.emitItems();
    }
  }

  emitItems(): void {
    const index = 3 * (this.activePage - 1);
    this.itemsToShow.emit(this.items.slice(index, index + 3));
  }

  navigateNext(): void {
    if (this.activePage < this.totalPages[this.totalPages.length - 1]) {
      this.activePage = this.activePage + 1;

      if (this.activePage > this.currentPages[2]) {
        const newCurrentPages = [];
        for(let i = 0; i < 3; i++) {
          if (this.currentPages[2] + (i + 1) <= this.totalPages[this.totalPages.length - 1]) {
            newCurrentPages.push(this.currentPages[2] + (i + 1));
          }
        }

        this.currentPages = newCurrentPages;
      }

      this.emitItems();
    }
  }

  navigatePrevious(): void {
    if (this.activePage > 1) {
      this.activePage = this.activePage - 1;

      if (this.activePage < this.currentPages[0]) {
        const newCurrentPages = [];
        for(let i = 0; i < 3; i++) {
          newCurrentPages.push(this.currentPages[0] - (i + 1));
        }

        this.currentPages = newCurrentPages.reverse();
      }

      this.emitItems();
    }
  }

  navigateToFirstPage(): void {
    this.activePage = 1;

    this.emitItems();

    if (this.totalPages.length >= 3) {
      this.currentPages = [1, 2, 3];
      return;
    }

    if (this.totalPages.length === 2) {
      this.currentPages = [1, 2];
      return;
    }

    if (this.totalPages.length === 1) {
      this.currentPages = [1];
      return;
    }
  }

  navigateToLastPage(): void {
    this.activePage = this.totalPages[this.totalPages.length - 1];

    this.emitItems();

    const iterations = this.totalPages.length % 3;

    const pages = [];
    for (let i = 0; i < (iterations === 0 ? 3 : iterations); i++) {
      pages.push(this.totalPages[this.totalPages.length - (i + 1)]);
    }

    this.currentPages = pages.reverse();
  }

  navigateTo(page): void {
    this.activePage = page;

    this.emitItems();
  }

}
