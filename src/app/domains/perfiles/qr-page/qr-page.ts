import { Component } from '@angular/core';
//
import { QrHeroSection } from './sections/qr-hero-section/qr-hero-section';
import { QrInfoSection } from './sections/qr-info-section/qr-info-section';
import { QrContactSection } from './sections/qr-contact-section/qr-contact-section';
import { Header } from '@shared/organisms/header/header';
import { Footer } from '@shared/organisms/footer/footer';

@Component({
  selector: 'app-qr-page',
  imports: [QrHeroSection, Header, QrInfoSection, QrContactSection, Footer],
  templateUrl: './qr-page.html',
  styleUrl: './qr-page.css',
})
export class QrPage {

}
