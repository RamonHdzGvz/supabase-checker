import { Component, Output, EventEmitter } from '@angular/core';
import { CardTemplate } from '@shared/organisms/card-template/card-template';

@Component({
  selector: 'app-cards-section',
  imports: [CardTemplate],
  templateUrl: './cards-section.html',
  styleUrl: './cards-section.css',
})
export class CardsSection {
  @Output() onButton1 = new EventEmitter<void>();
  @Output() onButton2 = new EventEmitter<void>();

  emitButton1Click() {
    this.onButton1.emit();
  }

  emitButton2Click() {
    this.onButton2.emit();
  }
}
