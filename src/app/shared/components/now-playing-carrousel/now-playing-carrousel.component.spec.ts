import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowPlayingCarrouselComponent } from './now-playing-carrousel.component';

describe('NowPlayingCarrouselComponent', () => {
  let component: NowPlayingCarrouselComponent;
  let fixture: ComponentFixture<NowPlayingCarrouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NowPlayingCarrouselComponent]
    });
    fixture = TestBed.createComponent(NowPlayingCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
