import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailPinPromptComponent } from './email-pin-prompt.component';

describe('EmailPinPromptComponent', () => {
  let component: EmailPinPromptComponent;
  let fixture: ComponentFixture<EmailPinPromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailPinPromptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailPinPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
