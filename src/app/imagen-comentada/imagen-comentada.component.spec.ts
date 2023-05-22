import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCommentsComponent  } from './imagen-comentada.component';

describe('ImagenComentadaComponent', () => {
  let component:ImageCommentsComponent ;
  let fixture: ComponentFixture<ImageCommentsComponent >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageCommentsComponent  ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCommentsComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
