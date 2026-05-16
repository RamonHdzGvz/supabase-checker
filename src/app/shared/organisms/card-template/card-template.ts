import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-card-template',
  imports: [ButtonModule],
  templateUrl: './card-template.html',
  styleUrl: './card-template.css',
})
export class CardTemplate {
  @Input() iconClass: string = 'pi pi-check';
  @Input() title: string = 'Título.';
  @Input() description: string = 'Descripción.';
  @Input() buttonLabel: string = 'Ver más';
  @Input() imageSrc: string = 'assets/images/hero-justice-square.jpg';

  @Output() onButton = new EventEmitter<void>();
}
