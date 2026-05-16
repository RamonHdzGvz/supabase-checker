import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-mini-hero-template',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './mini-hero-template.html',
  styleUrls: ['./mini-hero-template.css']
})
export class MiniHeroTemplate {
  // Imágenes
  @Input() mobileImage: string = '';
  @Input() desktopImage: string = '';

  // Textos
  @Input() titleHint: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() description: string = '';

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