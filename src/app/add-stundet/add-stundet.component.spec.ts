import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStundetComponent } from './add-stundet.component';

describe('AddStundetComponent', () => {
  let component: AddStundetComponent;
  let fixture: ComponentFixture<AddStundetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStundetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStundetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
