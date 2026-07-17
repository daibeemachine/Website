import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceHtml } from './experience-html';

describe('ExperienceHtml', () => {
  let component: ExperienceHtml;
  let fixture: ComponentFixture<ExperienceHtml>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceHtml]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceHtml);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
