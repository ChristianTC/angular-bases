import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ]

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(index:string):void {
    // TODO: Emit character Id
    this.onDeleteId.emit(index);
    console.log({index});
  }
}
