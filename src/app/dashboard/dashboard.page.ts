import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})


export class DashboardPage {
  currentCardNumber: number = 1; 

  imageSource1: any;
  currentDate1: string;
  imageSource2: any;
  currentDate2: string;
  imageSource3: any;
  currentDate3: string;

  constructor(private domSanitizer: DomSanitizer) {
    this.currentDate1 = '';
    this.currentDate2 = '';
    this.currentDate3 = '';
  }


  // Resto del código

  async takePhoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Prompt,
        saveToGallery: true
      });
  
      const currentDate = new Date().toLocaleDateString();
  
      if (this.currentCardNumber === 1) {
        this.currentDate1 = currentDate;
        this.imageSource1 = this.domSanitizer.bypassSecurityTrustUrl(image.webPath || '');
      } else if (this.currentCardNumber === 2) {
        this.currentDate2 = currentDate;
        this.imageSource2 = this.domSanitizer.bypassSecurityTrustUrl(image.webPath || '');
      } else if (this.currentCardNumber === 3) {
        this.currentDate3 = currentDate;
        this.imageSource3 = this.domSanitizer.bypassSecurityTrustUrl(image.webPath || '');
      }
  
      // Cambiar automáticamente a la siguiente tarjeta
      this.currentCardNumber = this.currentCardNumber === 3 ? 1 : this.currentCardNumber + 1;
  
    } catch (error) {
      console.error('Error taking photo:', error);
    }
  }
  


  

  getPhoto(cardNumber: number) {
    if (cardNumber === 1) {
      return this.imageSource1;
    } else if (cardNumber === 2) {
      return this.imageSource2;
    }
  }
}

