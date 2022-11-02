import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookActionComponent } from './components/book-action/book-action.component';
// import { NavigationService } from './navigation.service';

@NgModule({
  declarations: [AppComponent, BookDetailsComponent, BookActionComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModalModule,
    NgbModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
