import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetailFormComponent } from './blog-detail-form.component';

describe('BlogDetailFormComponent', () => {
  let component: BlogDetailFormComponent;
  let fixture: ComponentFixture<BlogDetailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogDetailFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
