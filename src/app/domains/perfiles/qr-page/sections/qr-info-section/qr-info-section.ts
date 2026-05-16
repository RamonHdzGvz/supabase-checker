import { Component } from '@angular/core';

@Component({
  selector: 'app-qr-info-section',
  imports: [],
  templateUrl: './qr-info-section.html',
  styleUrl: './qr-info-section.css',
})
export class QrInfoSection {
  whatsappUrl = 'https://api.whatsapp.com/send/?phone=5216862017398&text&type=phone_number&app_absent=0';
  openWhatsApp() {
    window.open(this.whatsappUrl, '_blank');
  }
}
