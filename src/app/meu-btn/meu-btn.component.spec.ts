import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuBtnComponent } from './meu-btn.component';

describe('MeuBtnComponent', () => {
  let component: MeuBtnComponent;
  let fixture: ComponentFixture<MeuBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
