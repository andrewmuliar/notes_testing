import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { Note } from '../interfaces/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

constructor(private socket:Socket) { }

  addNote(){
    this.socket.emit('addNote');
  }

  editNote(note:Note){
    this.socket.emit('editNote', note);
  }

  getNotes():Observable<Note[]>{
    return this.socket.fromEvent<Note[]>('notes');
  }

  editedNote():Observable<Note>{
    return this.socket.fromEvent<Note>('edit_note');
  }

  removeNote(note:Note){
    return this.socket.emit('remove_note', note);
  }

}
