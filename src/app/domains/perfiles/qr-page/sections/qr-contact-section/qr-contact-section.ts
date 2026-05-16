import { Component } from '@angular/core';

@Component({
  selector: 'app-qr-contact-section',
  imports: [],
  templateUrl: './qr-contact-section.html',
  styleUrl: './qr-contact-section.css',
})
export class QrContactSection {
  mapUrl = 'https://www.google.com/maps/place/Abogados+Penalistas+-+PROLITIGIO+S.C./@32.6614374,-115.4803656,20z/data=!4m14!1m7!3m6!1s0x80d77114d035ca0d:0x795d0c19fc7e1ed9!2sAbogados+Penalistas+-+PROLITIGIO+S.C.!8m2!3d32.6614338!4d-115.4802514!16s%2Fg%2F11h_vxd_n9!3m5!1s0x80d77114d035ca0d:0x795d0c19fc7e1ed9!8m2!3d32.6614338!4d-115.4802514!16s%2Fg%2F11h_vxd_n9?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D';

  openMap() {
    window.open(this.mapUrl, '_blank');
  }
}
