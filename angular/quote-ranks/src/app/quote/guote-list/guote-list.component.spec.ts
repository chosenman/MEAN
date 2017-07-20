import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuoteListComponent } from './guote-list.component';

describe('GuoteListComponent', () => {
  let component: GuoteListComponent;
  let fixture: ComponentFixture<GuoteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuoteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
