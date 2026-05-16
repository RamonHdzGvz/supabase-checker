import { Component, inject } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { LoadingService } from "@core/services/loading.service";
import { SupabaseAwaleService } from "@core/services/supabase-awale.service";
import { environment } from "@environment";
import { Project } from "@core/services/supabase-awale.service";
import { ToastService } from "@core/services/toast.service";

@Component({
  selector: "app-home-page",
  imports: [ButtonModule],
  templateUrl: "./home-page.html",
})
export class HomePage {
  private loading = inject(LoadingService);
  private supabaseAwale = inject(SupabaseAwaleService);
  private toast = inject(ToastService);

  projects = environment.projects as Project[];

  async onButtonClickProject(project: Project) {
    this.loading.show();
    try {
      await this.supabaseAwale.pingProject(project);
      this.toast.showSuccess(`${project.name} enviado correctamente`);
    } catch (error) {
      this.toast.showError(`Error al enviar ${project.name}`);
    } finally {
      this.loading.hide();
    }
  }
}
