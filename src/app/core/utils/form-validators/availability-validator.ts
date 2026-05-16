import { toSignal } from '@angular/core/rxjs-interop';
import { AbstractControl, AsyncValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { map } from 'rxjs';

type AvailabilityValidatorOptions = {
  minLength?: number;
  ignoreValue?: () => string | null;
};

export function availabilityValidator(
  checkFn: (value: string) => Promise<boolean>,
  options?: AvailabilityValidatorOptions
): AsyncValidatorFn {
  const { minLength = 3, ignoreValue } = options ?? {};
  return async (control: AbstractControl): Promise<ValidationErrors | null> => {
    const value = control.value;

    if (!value || value.length < minLength) {
      return null;
    }

    if (ignoreValue) {
      const ignore = ignoreValue();

      if (ignore != null && value === ignore) {
        return null;
      }
    }

    const currentValueAtRequest = value;

    try {
      const isAvailable = await checkFn(value);
      if (control.value !== currentValueAtRequest) {
        return null;
      }
      return isAvailable ? null : { taken: true };
    } catch {
      return null;
    }
  };
}

export function isFormControlTaken(control: FormControl) {
  return toSignal(control.statusChanges.pipe(
    map(() =>
      !!control.value &&
      !control.pending &&
      !!control.errors?.['taken']
    )
  ), { initialValue: false });
}