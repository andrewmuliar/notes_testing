import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    OnGatewayConnection,
    OnGatewayDisconnect,
  } from '@nestjs/websockets';
import { Note } from 'src/interface/notes';

  @WebSocketGateway({ cors: true })
  export class NoteGateway implements OnGatewayConnection, OnGatewayDisconnect {

    notes:Note[] = [ // Default
        {
            id:1,
            title:'title',
            body:'body',
            created:Date.now().toString()
        }
    ]

    @WebSocketServer() server;

    async handleConnection() {
      // A client has connected
      // Notify connected clients of current users
      this.server.emit('notes', this.notes);
    }

    async handleDisconnect() {
      // A client has disconnected
      // Notify connected clients of current users
    //   this.server.emit('users', this.users);
    }

    @SubscribeMessage('addNote')
    async onAddNote() {
      const note:Note = {
          id:Date.now(),
          title:'New note ',
          body:'Lorem #tag1 #tag2 asdasd #tag4',
          created:Date.now().toString()
      }
      console.log(note);
      this.notes.push(note);
      this.server.emit('notes', [note]);
    }

    @SubscribeMessage('editNote')
    async editNote(client, edit_note:Note) {
      const index = this.notes.findIndex( note => note.id === edit_note.id);
      this.notes[index] = edit_note;
      this.notes[index].created = Date.now().toString(); // update time
      this.server.emit('edit_note', this.notes[index]);
    }

    @SubscribeMessage('remove_note')
    async removeNote(client, note:Note) {
      this.notes = this.notes.filter( item => item.id != note.id );
    }

  }