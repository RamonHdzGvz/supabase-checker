import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/angular';
import { DummyComponent } from './dummy.component';

describe('DummyComponent (standalone)', () => {
  it('renders input label', async () => {
    const { getByTestId } = await render(DummyComponent, {
      componentProperties: { label: 'Hola Angular + Vitest' },
    });

    expect(getByTestId('label').textContent).toBe('Hola Angular + Vitest');
  });
});
