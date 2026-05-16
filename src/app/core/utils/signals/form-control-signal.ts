import { FormControl } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import { computed } from '@angular/core';
import { startWith, map } from 'rxjs';

export function formControlSignal(control: FormControl) {
  const value = toSignal(
    control.valueChanges.pipe(startWith(control.value)),
    { initialValue: control.value }
  );

  const status = toSignal(
    control.statusChanges.pipe(startWith(control.status)),
    { initialValue: control.status }
  );

  const errors = computed(() => {
    status();
    return control.errors;
  });

  const pending = computed(() => status() === 'PENDING');

  const invalid = computed(() => status() === 'INVALID');

  const valid = computed(() => status() === 'VALID');

  const hasError = (key: string) =>
    computed(() => {
      status();
      return control.hasError(key);
    });

  const taken = hasError('taken');

  return {
    value,
    status,
    errors,
    pending,
    invalid,
    valid,
    hasError,
    taken
  };
}