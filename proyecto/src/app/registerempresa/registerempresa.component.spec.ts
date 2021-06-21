import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterempresaComponent } from './registerempresa.component';

describe('RegisterempresaComponent', () => {
  let component: RegisterempresaComponent;
  let fixture: ComponentFixture<RegisterempresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterempresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterempresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
