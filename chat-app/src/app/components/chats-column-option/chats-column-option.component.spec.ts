import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatsColumnOptionComponent } from './chats-column-option.component';

describe('ChatsColumnOptionComponent', () => {
  let component: ChatsColumnOptionComponent;
  let fixture: ComponentFixture<ChatsColumnOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatsColumnOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatsColumnOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
