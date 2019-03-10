import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloginfoFormComponent } from './bloginfo-form.component';

describe('BloginfoFormComponent', () => {
  let component: BloginfoFormComponent;
  let fixture: ComponentFixture<BloginfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloginfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloginfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
