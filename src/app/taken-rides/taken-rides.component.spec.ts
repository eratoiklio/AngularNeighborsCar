import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakenRidesComponent } from './taken-rides.component';

describe('TakenRidesComponent', () => {
  let component: TakenRidesComponent;
  let fixture: ComponentFixture<TakenRidesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakenRidesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakenRidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
