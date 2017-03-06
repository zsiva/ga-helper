import { TestBed } from '@angular/core/testing';

import { FormRowComponent } from './form-row.component';

describe('Form Row Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [FormRowComponent]});
  });

  it('should have a label', () => {
    const fixture = TestBed.createComponent(FormRowComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('label')).toBe(true);

  });

});
