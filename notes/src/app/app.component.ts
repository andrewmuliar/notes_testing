import { Component, OnInit } from '@angular/core';
import { Note } from './interfaces/note';
import { NoteService } from './services/note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'notes';

  selectedNote:Note|null;
  search = '';
  tags:string[] = [];
  selectedTag:string;
  tagRegex = new RegExp('#([^\\s]*)', 'g'); // regex to detect tags in text

  notes:Note[] = [];

  constructor(private noteService:NoteService){}

  ngOnInit(){
    this.noteService.getNotes().subscribe({
      next: data => {
        this.notes.push(...data);
        this.setSelectedNote();
        this.findTags();
      } 
    })
    this.noteService.editedNote().subscribe({
      next: data => {
        const index = this.notes.findIndex( note => note.id === data.id);
        this.notes[index] = data;
        this.notes = [...this.notes]
        this.findTags();
      }
    })
  }

  newItem(){
    this.noteService.addNote();
  }

  setSelectedNote(){
    if(this.notes && this.notes.length > 0){
      this.selectedNote = this.notes[this.notes.length -1]; // Select last created note
    }
    else{
      this.selectedNote = null;
    }
  }

  editNote(note:Note){
    this.noteService.editNote(note);
    this.findTags();
  }

  removeNote(note:Note){
    this.noteService.removeNote(note);
    this.notes = this.notes.filter( note_item => note_item.id != note.id);
    this.setSelectedNote();
    this.findTags();
  }

  toggleTag(tag:string){
    if(this.selectedTag === tag){
      this.selectedTag = '';
    }
    else{
      this.selectedTag = tag;
    }
  }

  findTags(){
    if(this.notes && this.notes.length > 0){
      this.notes.forEach( ( note ) => {
        const foundedTags = note.body.match(this.tagRegex);
        if(foundedTags){
          this.tags.push( ...foundedTags );
          this.tags = [ ...new Set(this.tags)]; // make unique tags
        }
      })
    }
    else{ // prevent tags if notes is empty
      this.tags = [];
    }
  }

}
