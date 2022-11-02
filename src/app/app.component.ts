import { Component, EventEmitter, Output } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DataService } from './data.service';
import { BooksModel } from './models/books';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'librayManagement';
  // @Output() viewBookDetails: EventEmitter<BooksModel> = new EventEmitter();

  genreUnique: {
    genre: string;
  }[] = [];
  bookList: any;
  genreList: any;
  constructor(
    private dataService: DataService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.dataService.getGenre().subscribe({
      next: (data: any) => {
        this.genreList = data.data;
        localStorage.setItem('myData', JSON.stringify(data.data));
        this.genreUnique = Array.from(
          new Set(data.data.map((item: any) => item.genre))
        );
      },
    });
  }

  onClickGenre(event: any) {
    this.bookList = this.genreList.filter((i: any) => i.genre == event);
    const modalRef = this.modalService.open(BookDetailsComponent);
    modalRef.componentInstance.booklist = this.bookList;
  }
}
