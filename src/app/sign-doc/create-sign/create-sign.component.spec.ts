import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSignComponent } from './create-sign.component';

describe('CreateSignComponent', () => {
  let component: CreateSignComponent;
  let fixture: ComponentFixture<CreateSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
