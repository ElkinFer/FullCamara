import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, public alertController: AlertController, private router: Router) {
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
    });
  }

  ngOnInit() {
  }

  async ingresar() {
    if (this.formularioLogin.valid) {
      const nombre = this.formularioLogin.value.nombre;
      const password = this.formularioLogin.value.password;
  
      
      const usuarioString = localStorage.getItem('usuario');
  
      if (usuarioString) {
        
        const credencialesRegistradas = JSON.parse(usuarioString);
  
        if (credencialesRegistradas && credencialesRegistradas.nombre === nombre && credencialesRegistradas.password === password) {
          
          console.log("Credenciales válidas");
          this.router.navigate(['/homme']); 
        } else {
          
          console.log("Credenciales inválidas");
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'Credenciales inválidas. Por favor, inténtalo nuevamente.',
            buttons: ['Aceptar'],
          });
          await alert.present();
        }
      } else {
        
        console.log("No se encontraron credenciales almacenadas en localStorage");
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'No se encontraron credenciales almacenadas. Por favor, regístrate primero.',
          buttons: ['Aceptar'],
        });
        await alert.present();
      }
    } else {
      
      console.log("Formulario inválido");
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, debes registrarte primero.',
        buttons: ['Aceptar'],
      });
      await alert.present();
    }
  }
  
  
}
