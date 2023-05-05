import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideabrComponent } from './sideabr.component';

describe('SideabrComponent', () => {
  let component: SideabrComponent;
  let fixture: ComponentFixture<SideabrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideabrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideabrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
