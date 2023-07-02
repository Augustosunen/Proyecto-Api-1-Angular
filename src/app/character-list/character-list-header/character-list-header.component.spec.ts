import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterListHeaderComponent } from './character-list-header.component';

describe('CharacterListHeaderComponent', () => {
  let component: CharacterListHeaderComponent;
  let fixture: ComponentFixture<CharacterListHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterListHeaderComponent]
    });
    fixture = TestBed.createComponent(CharacterListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
