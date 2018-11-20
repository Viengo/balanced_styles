import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextpageComponent } from './textpage.component';

describe('TextpageComponent', () => {
  let component: TextpageComponent;
  let fixture: ComponentFixture<TextpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
