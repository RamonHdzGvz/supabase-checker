import { Component } from '@angular/core';
import { Navbar } from 'src/app/components/navbar/navbar';
import { Footer } from 'src/app/components/footer/footer';
import { FeaturesSection } from 'src/app/components/sections/features-section/features-section';
import { HeroTemplate } from '@shared/organisms/hero-template/hero-template';
import { MiniFeaturesSection } from 'src/app/components/sections/mini-features-section/mini-features-section';
import { MiniHeroTemplate } from '@shared/organisms/mini-hero-template/mini-hero-template';
import { CardsSection } from 'src/app/components/sections/cards-section/cards-section';
import { TrustIndicatorsSection } from 'src/app/components/sections/trust-indicators-section/trust-indicators-section';
import { ContactFormSection } from 'src/app/components/sections/contact-form-section/contact-form-section';

@Component({
  selector: 'app-divorce-home-page',
  imports: [Navbar, HeroTemplate, MiniFeaturesSection, CardsSection, FeaturesSection, MiniHeroTemplate, TrustIndicatorsSection, Footer, ContactFormSection],
  templateUrl: './divorce-home-page.html',
  styleUrl: './divorce-home-page.css',
})
export class DivorceHomePage {
  private phoneNumber = '';

  private openWhatsApp(message: string) {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${this.phoneNumber}?text=${encoded}`, '_blank');
  }

  scheduleAppointment() {
    this.openWhatsApp('Hola, me gustaría agendar una cita para una consulta.');
  }

  contactViaWhatsApp() {
    this.openWhatsApp('Me gustarían ponerme en contacto con ustedes para recibir asesoría legal.');
  }

  requestInformation1() {
    this.openWhatsApp('Me gustaría más informes para Divorcio Incausado.');
  }

  requestInformation2() {
    this.openWhatsApp('Me gustaría más informes para Divorcio Voluntario.');
  }
}
