import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FloatFormInput } from '@shared/molecules/float-form-input/float-form-input';
import { FormControl, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form-section',
  imports: [FloatFormInput, ButtonModule, ReactiveFormsModule],
  templateUrl: './contact-form-section.html',
  styleUrl: './contact-form-section.css',
})
export class ContactFormSection {

  name = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  message = new FormControl('', [Validators.required, Validators.minLength(10)]);
  phone = new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]);

  messageForm = new FormGroup({
    name: this.name,
    email: this.email,
    message: this.message,
    phone: this.phone
  });

  onSubmit() {
    if (this.messageForm.valid) {
    }
  }

}
