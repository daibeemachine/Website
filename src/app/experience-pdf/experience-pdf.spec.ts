import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencePdf } from './experience-pdf';

describe('ExperiencePdf', () => {
  let component: ExperiencePdf;
  let fixture: ComponentFixture<ExperiencePdf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperiencePdf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencePdf);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
