import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailInlineComponent } from './project-detail-inline.component';

describe('ProjectDetailInlineComponent', () => {
  let component: ProjectDetailInlineComponent;
  let fixture: ComponentFixture<ProjectDetailInlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDetailInlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailInlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
