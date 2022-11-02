import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/data.service';
import { BooksModel } from 'src/app/models/books';

@Component({
  selector: 'app-book-action',
  templateUrl: './book-action.component.html',
  styleUrls: ['./book-action.component.scss'],
})
export class BookActionComponent implements OnInit {
  @Input() book: BooksModel = new BooksModel();
  constructor(
    public activeModal: NgbActiveModal,
    private dataService: DataService
  ) {}

  ngOnInit(): void {}
  onCheckOut(event: any) {
    if (event.copies != 0) event.copies = event.copies - 1;
  }
  onReturn(event: any) {
    this.dataService.getGenre().subscribe((response: any) => {
      response.data.forEach((i: any) => {
        if (i.bookId == event.bookId && event.copies < i.copies) {
          event.copies = event.copies + 1;
        }
      });
    });
  }
}
