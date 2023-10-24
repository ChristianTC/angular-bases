import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  public character:Character = {
    name: '123',
    power: 0
  };

  emitCharacter() {
    console.log(this.character);
  }

}
