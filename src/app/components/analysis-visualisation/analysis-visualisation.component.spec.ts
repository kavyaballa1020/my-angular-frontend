import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisVisualisationComponent } from './analysis-visualisation.component';

describe('AnalysisVisualisationComponent', () => {
  let component: AnalysisVisualisationComponent;
  let fixture: ComponentFixture<AnalysisVisualisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisVisualisationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysisVisualisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
