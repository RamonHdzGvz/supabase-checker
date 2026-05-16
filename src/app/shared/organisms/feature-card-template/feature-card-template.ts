import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-card-template',
  imports: [],
  templateUrl: './feature-card-template.html',
  styleUrl: './feature-card-template.css',
})
export class FeatureCardTemplate {
  @Input() icon: string = 'pi pi-star';
  @Input() title: string = '';
  @Input() subtitle: string = '';

  @Input() lightText: boolean = false;
}
