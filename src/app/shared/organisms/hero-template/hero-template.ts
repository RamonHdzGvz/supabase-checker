import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-hero-template',
  imports: [ButtonModule],
  templateUrl: './hero-template.html',
  styleUrl: './hero-template.css',
})
export class HeroTemplate {
  // Imágenes
  @Input() mobileImage: string = ''; // Imagen para pantallas móviles y tabletas
  @Input() desktopImage: string = ''; // Imagen para pantallas grandes

  // Textos
  @Input() titleHint: string = ''; // Texto pequeño encima del título
  @Input() title: string = ''; // Títluo (con formato)
  @Input() subtitle: string = ''; // Subtítulo (con formato)
  @Input() description: string = ''; // Párrafo

  // Botones
  @Input() showButtons: boolean = true;
  @Input() button1Text: string = 'AGENDAR CONSULTA';
  @Input() button2Text: string = 'ESCRÍBENOS POR WHATSAPP';

  // Eventos
  @Output() onButton1 = new EventEmitter<void>();
  @Output() onButton2 = new EventEmitter<void>();

  // Incisos
  @Input() bulletPoints: string[] = [];
  @Input() showBulletPoints: boolean = false;
  @Input() bulletIcon: string = 'pi pi-verified';
}
