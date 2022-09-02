import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorsListComponent } from './creators-list.component';

describe('CreatorsListComponent', () => {
  let component: CreatorsListComponent;
  let fixture: ComponentFixture<CreatorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
