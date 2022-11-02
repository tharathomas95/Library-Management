import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BooksModel } from 'src/app/models/books';
import { BookActionComponent } from '../book-action/book-action.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  @Input() booklist: BooksModel = new BooksModel();
  actualbooks: any = [];
  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.actualbooks = this.booklist;
  }
  onClickBook(event: any) {
    const modalRef = this.modalService.open(BookActionComponent);
    modalRef.componentInstance.book = event;
  }
}
