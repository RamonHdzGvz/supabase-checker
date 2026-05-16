import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trust-indicator-template',
  imports: [],
  templateUrl: './trust-indicator-template.html',
  styleUrl: './trust-indicator-template.css',
})
export class TrustIndicatorTemplate {
  @Input() icon: string = 'pi pi-shield';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() description: string = '';
  @Input() lightText: boolean = false;
}
