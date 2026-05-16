import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  template: `<span data-testid="label">{{ label }}</span>`,
})
export class DummyComponent {
  @Input() label = '';
}
