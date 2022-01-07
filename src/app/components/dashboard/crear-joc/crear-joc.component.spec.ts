import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearJocComponent } from './crear-joc.component';

describe('CrearJocComponent', () => {
  let component: CrearJocComponent;
  let fixture: ComponentFixture<CrearJocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearJocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearJocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
