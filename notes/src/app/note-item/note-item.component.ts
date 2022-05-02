import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../interfaces/note';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.scss']
})
export class NoteItemComponent implements OnInit {

  @Input('note') note:Note;
  @Output('noteSelected') noteSelected = new EventEmitter<Note>();
  @Output('noteRemoved') noteRemoved = new EventEmitter<Note>();
  constructor() { }

  ngOnInit() {
  }

  removeNote(){
    this.noteRemoved.emit(this.note);
  }

  selectNote(){
    this.noteSelected.emit(this.note);
  }

}
