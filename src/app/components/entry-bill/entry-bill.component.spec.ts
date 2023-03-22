import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryBillComponent } from './entry-bill.component';

describe('EntryBillComponent', () => {
  let component: EntryBillComponent;
  let fixture: ComponentFixture<EntryBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
