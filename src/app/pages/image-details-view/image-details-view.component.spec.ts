import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDetailsViewComponent } from './image-details-view.component';

describe('ImageDetailsViewComponent', () => {
  let component: ImageDetailsViewComponent;
  let fixture: ComponentFixture<ImageDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
