import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PokemonService } from '../pokemon.service'; 

@Component({
  selector: 'app-list-api',
  templateUrl: './list-api.page.html',
  styleUrls: ['./list-api.page.scss'],
})
export class ListApiPage implements OnInit {
  
  listPokemon: any[]=[];

  estadoToken: any;

  constructor( public http: HttpClient,
    private router:Router,
    private pokeService: PokemonService) { }

    ngOnInit() {
      this.getPokemons(); 
    }
  
    ValidacionToken() {
      this.estadoToken = localStorage.getItem('token');
      this.estadoToken = JSON.parse(this.estadoToken);
  
      if (this.estadoToken === false) {
        this.router.navigate(['./login']);
      }
    }
  
    


    getPokemons() {
      for (let i = 1; i <= 30; i++) {
        this.pokeService.getPokemon(i).subscribe(
          (res) => {
            this.listPokemon.push(res);
          },
          (err) => {
            
          }
        );
      }
    }
  } 