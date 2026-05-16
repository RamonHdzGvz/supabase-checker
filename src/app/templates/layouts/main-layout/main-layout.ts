import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoadingSpinner } from '@shared/molecules/loading-spinner/loading-spinner';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, LoadingSpinner, ToastModule],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {

}
