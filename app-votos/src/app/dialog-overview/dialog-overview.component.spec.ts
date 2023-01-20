import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { DialogOverviewExample } from './dialog-overview.component';

describe('DialogOverviewComponent', () => {
  let component: DialogOverviewExample;
  let fixture: ComponentFixture<DialogOverviewExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOverviewExample ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogOverviewExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
