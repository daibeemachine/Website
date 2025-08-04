import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeesComponent } from './bees.component';

describe('BeesComponent', () => {
  let component: BeesComponent;
  let fixture: ComponentFixture<BeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
