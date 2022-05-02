import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NoteItemComponent } from './note-item/note-item.component';
import { NoteDetailComponent } from './note-detail/note-detail.component';
import { TagsComponent } from './tags/tags.component';
import { DateFormatPipe } from './pipes/dateFormat.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { SortByDatePipe } from './pipes/sortByDate.pipe';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };

@NgModule({
  declarations: [							
    AppComponent,
      NoteItemComponent,
      NoteDetailComponent,
      TagsComponent,
      DateFormatPipe,
      FilterPipe,
      SortByDatePipe
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SocketIoModule.forRoot(config),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
