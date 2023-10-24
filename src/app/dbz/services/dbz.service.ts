import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    {
      name: 'Goku',
      power: 9500
    },
    {
      name: 'Krillin',
      power: 500
    },
    {
      name: 'Vegeta',
      power: 9000
    }
  ];

  onNewCharacter(character: Character):void {
    this.characters.push(character)
    console.log(character);
  }

  onDeleteCharacter(id:number):void {
    this.characters.splice(id,1)
  }
}
