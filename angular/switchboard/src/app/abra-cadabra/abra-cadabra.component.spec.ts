import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbraCadabraComponent } from './abra-cadabra.component';

describe('AbraCadabraComponent', () => {
  let component: AbraCadabraComponent;
  let fixture: ComponentFixture<AbraCadabraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbraCadabraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbraCadabraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
