import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-homme',
  templateUrl: './homme.page.html',
  styleUrls: ['./homme.page.scss'],
})
export class HommePage {
  constructor(private router: Router) {} 

  
  goToAudioPlayerPage() {
    this.router.navigate(['/reproductor-audio']); 
  }

  goToDashboardPage() {
    this.router.navigate(['/dashboard']);
  }

  goToListApiPage() {
    this.router.navigate(['/list-api']); 
  }
  

}

