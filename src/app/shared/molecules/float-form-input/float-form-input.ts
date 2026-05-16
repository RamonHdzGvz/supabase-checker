import { Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { TextareaModule } from 'primeng/textarea';

export type NormalizeRule =
  | 'trim'
  | 'lowercase'
  | 'uppercase'
  | 'noSpaces'
  | 'alphanumeric'
  | 'alphanumericWithDash';

const ORDER: NormalizeRule[] = [
  'trim',
  'lowercase',
  'uppercase',
  'noSpaces',
  'alphanumeric',
  'alphanumericWithDash'
];

export type InputPreset = 'email' | 'folio' | 'username' | 'text';

export const INPUT_PRESETS: Record<InputPreset, NormalizeRule[]> = {
  email: ['trim', 'lowercase'],
  folio: ['trim', 'uppercase', 'noSpaces', 'alphanumericWithDash'],
  username: ['trim', 'lowercase', 'noSpaces', 'alphanumeric'],
  text: ['trim']
};

@Component({
  selector: 'app-float-form-input',
  imports: [
    TextareaModule,
    FloatLabelModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    PasswordModule,
    ReactiveFormsModule
  ],
  templateUrl: './float-form-input.html',
  styleUrl: './float-form-input.css',
})
export class FloatFormInput implements OnInit {

  @Input() label: string = '';
  @Input() type: 'text' | 'password' | 'textarea' = 'text';
  @Input() control!: FormControl;
  @Input() icon: string = '';
  @Input() rows: number = 2;
  @Input() requiredSign: boolean = false;
  @Input() preset?: InputPreset;
  @Input() normalize: NormalizeRule[] = [];

  private destroyRef = inject(DestroyRef);

  private _readonly = false;
  @Input() set readonly(value: boolean) {
    this._readonly = value;
    if (this.control) {
      value
        ? this.control.disable({ emitEvent: false })
        : this.control.enable({ emitEvent: false });
    }
  }
  get readonly(): boolean {
    return this._readonly;
  }

  private resolveRules(): NormalizeRule[] {
    const presetRules = this.preset ? INPUT_PRESETS[this.preset] : [];

    const merged = Array.from(new Set([
      ...presetRules,
      ...this.normalize
    ]));

    return ORDER.filter(rule => merged.includes(rule));
  }

  ngOnInit() {
    if (!this.control) return;

    const rules = this.resolveRules();
    if (rules.length === 0) return;

    this.control.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(value => {
        if (typeof value !== 'string') return;

        let normalized = this.applyRealTimeNormalization(rules, value);

        if (normalized !== value) {
          this.control.setValue(normalized, { emitEvent: false });
        }
      });
  }

  applyRealTimeNormalization(rules: NormalizeRule[], normalized: string): string {
    if (rules.includes('lowercase')) {
      normalized = normalized.toLowerCase();
    }

    if (rules.includes('uppercase')) {
      normalized = normalized.toUpperCase();
    }

    if (rules.includes('noSpaces')) {
      normalized = normalized.replace(/\s+/g, '');
    }

    if (rules.includes('alphanumeric')) {
      normalized = normalized.replace(/[^a-zA-Z0-9]/g, '');
    }

    if (rules.includes('alphanumericWithDash')) {
      normalized = normalized.replace(/[^a-zA-Z0-9-]/g, '');
    }

    return normalized;
  }

  applyDeferredNormalization() {
    const value = this.control.value;
    if (typeof value !== 'string') return;

    let normalized = value;

    const rules = this.resolveRules();

    if (rules.includes('trim')) {
      normalized = normalized.trim();
    }

    if (normalized !== value) {
      this.control.setValue(normalized, { emitEvent: false });
    }
  }
}