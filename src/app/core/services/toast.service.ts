import { Injectable, inject } from '@angular/core';
import { MessageService } from 'primeng/api';

export type ToastSeverity =
  | 'success'
  | 'info'
  | 'warn'
  | 'error'
  | 'contrast'
  | 'secondary'
  | 'custom';

@Injectable({
  providedIn: 'root',
})

export class ToastService {
  private messageService = inject(MessageService);

  // Custom
  show(
    severity: ToastSeverity,
    summary: string,
    detail: string,
    life = 3000,
    key?: string,
    sticky = false,
    styleClass?: string
  ) {
    this.messageService.add({ severity, summary, detail, life, key, sticky, styleClass });
  }

  clear(key?: string) {
    this.messageService.clear(key);
  }

  // Prehechos
  showSuccess(detail = 'Message Content', key?: string) {
    this.show('success', 'Éxito', detail, 3000, key);
  }

  showError(detail = 'Message Content', key?: string) {
    this.show('error', 'Error', detail, 3000, key);
  }

  showInfo(detail = 'Message Content', key?: string) {
    this.show('info', 'Info', detail, 3000, key);
  }

  showPersistent(detail = 'Message Content', key?: string) { this.show('info', 'Info', detail, 0, key, true); }
}
