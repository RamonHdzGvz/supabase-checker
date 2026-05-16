import { Component } from '@angular/core';
import { AppConstants } from 'src/app/app.config';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  address = AppConstants.address;
  phone = AppConstants.phone;
  workingHours = AppConstants.workingHours;
  email = AppConstants.email;
}
