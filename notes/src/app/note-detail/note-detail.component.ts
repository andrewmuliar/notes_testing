import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Note } from '../interfaces/note';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NoteDetailComponent implements OnInit {

  @Input('note') note:Note;
  @Input('tags') tags:string[];
  @Output('changed') changed = new EventEmitter<Note>();
  
  readTitle = true;
  readBody = true;

  constructor() { }

  ngOnInit() {}

  noteChanged(){
    this.changed.emit(this.note);
  }

  parseTag():string{
    const reg = new RegExp('#([^\\s]*)', 'g');
    let result = this.note.body;
    this.tags.forEach( tag => {
      result = result.replace(tag, '<span class = "tagged">'+tag+'</span>');
    })
    return result;
  }

  

}
