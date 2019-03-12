import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUsersTableComponent } from './all-users-table.component';

describe('AllUsersTableComponent', () => {
  let component: AllUsersTableComponent;
  let fixture: ComponentFixture<AllUsersTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllUsersTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUsersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
