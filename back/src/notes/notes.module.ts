import { Module } from '@nestjs/common';
import { NoteGateway } from './notes.gateway';

@Module({
    providers:[NoteGateway]
})
export class NotesModule {}
