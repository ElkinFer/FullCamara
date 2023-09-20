import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-reproductor-audio',
  templateUrl: './reproductor-audio.page.html',
  styleUrls: ['./reproductor-audio.page.scss'],
})
export class ReproductorAudioPage implements AfterViewInit {
  @ViewChild('audioPlayer', { static: false }) audioPlayer!: ElementRef;
  audioSrc: string = ''; // Ruta del archivo de audio actual
  currentSong: any = null; // Canción actualmente seleccionada
  isPaused: boolean = true; // Variable para rastrear el estado de reproducción (pausa/reproducción)
  
  // Lista de canciones
  songs = [
    { title: 'Journey - Separate Ways', src: '/assets/Journey - Separate Ways (Worlds Apart) (Official HD Video)(M4A_128K).m4a', isPlaying: false },
    { title: 'Sonata Arctica - Fullmoon ', src: '/assets/Sonata Arctica - Fullmoon - Clip(M4A_128K).m4a', isPlaying: false },
    { title: 'Stratovarius - Paradise', src: '/assets/Stratovarius - Paradise(M4A_128K).m4a', isPlaying: false },
    { title: 'HELLOWEEN - I Want Out', src: '/assets/HELLOWEEN - I Want Out (Official Music Video)(M4A_128K).m4a', isPlaying: false },
    { title: 'Daughtry - No Surprise', src: '/assets/Daughtry - No Surprise(M4A_128K).m4a', isPlaying: false },
    
    
  ];

  constructor() {
    this.isPaused = true; 
  }

  playAudio(song: any) {
    if (this.currentSong !== song) {
      
      if (this.currentSong) {
        this.pauseAudio(this.currentSong);
      }
      
      
      this.currentSong = song;
      this.audioSrc = song.src;
  
      this.audioPlayer.nativeElement.addEventListener('canplaythrough', () => {
        this.audioPlayer.nativeElement.play();
        song.isPlaying = true;
        this.isPaused = false; 
      });
  
      // Carga el archivo de audio
      this.audioPlayer.nativeElement.load();
    } else {
      
      if (this.audioPlayer.nativeElement.paused) {
        this.audioPlayer.nativeElement.play();
        song.isPlaying = true;
        this.isPaused = false; 
      } else {
        this.audioPlayer.nativeElement.pause();
        song.isPlaying = false;
        this.isPaused = true; 
      }
    }
  }

  pauseAudio(song: any) {
    if (this.audioSrc === song.src) {
      this.audioPlayer.nativeElement.pause();
    }
    song.isPlaying = false;
    this.isPaused = true; 
  }

  audioEnded() {
    
    this.audioPlayer.nativeElement.pause();
    this.currentSong.isPlaying = false;
    this.isPaused = true; 
  }

  ngAfterViewInit() {
    
    console.log('Vista inicializada completamente. Puedes acceder a audioPlayer aquí.');

    
    this.audioPlayer.nativeElement.addEventListener('canplaythrough', () => {
      if (this.currentSong && this.currentSong.isPlaying) {
        this.audioPlayer.nativeElement.play();
      }
    });
  }
}
