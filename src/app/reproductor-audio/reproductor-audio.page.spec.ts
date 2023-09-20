import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReproductorAudioPage } from './reproductor-audio.page';


describe('ReproductorAudioPage', () => {
  let component: ReproductorAudioPage;
  let fixture: ComponentFixture<ReproductorAudioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReproductorAudioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
