/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NoteItemComponent } from './note-item.component';

describe('NoteItemComponent', () => {
  let component: NoteItemComponent;
  let fixture: ComponentFixture<NoteItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
