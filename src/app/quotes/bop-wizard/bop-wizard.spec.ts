import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BopWizard } from './bop-wizard';

describe('BopWizard', () => {
  let component: BopWizard;
  let fixture: ComponentFixture<BopWizard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BopWizard],
    }).compileComponents();

    fixture = TestBed.createComponent(BopWizard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
