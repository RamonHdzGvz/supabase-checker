import { Component, inject } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { Router } from "@angular/router";
import { LoadingService } from "@core/services/loading.service";

@Component({
  selector: "app-home-page",
  imports: [ButtonModule],
  templateUrl: "./home-page.html",
})
export class HomePage {
  private router = inject(Router);
  private loading = inject(LoadingService);
}
