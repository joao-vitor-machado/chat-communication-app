import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsColumnComponent } from './chats-column.component';

describe('ChatsColumnComponent', () => {
  let component: ChatsColumnComponent;
  let fixture: ComponentFixture<ChatsColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatsColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
