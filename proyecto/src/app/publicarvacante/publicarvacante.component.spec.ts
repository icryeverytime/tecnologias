import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicarvacanteComponent } from './publicarvacante.component';

describe('PublicarvacanteComponent', () => {
  let component: PublicarvacanteComponent;
  let fixture: ComponentFixture<PublicarvacanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicarvacanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicarvacanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
