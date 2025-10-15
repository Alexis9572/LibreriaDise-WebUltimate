import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor() {
  }

  listPokemons(limit: number = 20, offset: number = 0)  {
    return fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      .then((response) => response.json())
      .then( (data) => {
        console.log('pkmns', data);
        return data.results;
      });


  }
}
