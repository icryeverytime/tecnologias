import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteforeverComponent } from './deleteforever.component';

describe('DeleteforeverComponent', () => {
  let component: DeleteforeverComponent;
  let fixture: ComponentFixture<DeleteforeverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteforeverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteforeverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
