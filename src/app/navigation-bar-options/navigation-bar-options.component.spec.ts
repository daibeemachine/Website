import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBarOptionsComponent } from './navigation-bar-options.component';

describe('NavigationBarOptionsComponent', () => {
  let component: NavigationBarOptionsComponent;
  let fixture: ComponentFixture<NavigationBarOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationBarOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationBarOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
