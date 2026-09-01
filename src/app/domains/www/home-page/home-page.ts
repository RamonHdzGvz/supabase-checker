import { Component, inject, signal } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { LoadingService } from "@core/services/loading.service";
import { SupabaseAwakeService } from "@core/services/supabase-awale.service";
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
  private supabaseAwale = inject(SupabaseAwakeService);
  private toast = inject(ToastService);

  projects = environment.projects as Project[];

  projectStatus = signal<Record<string, boolean>>({});

  async onButtonClickProject(project: Project) {
    this.loading.show();
    try {
      var result = await this.supabaseAwale.pingProject(project);
      this.toast.showSuccess(`${project.name}: ${result.message} `);
      this.projectStatus.update(status => ({
        ...status,
        [project.name]: true,
      }));
    } catch (error) {
      this.toast.showError(`Error al enviar ${project.name}`);
      this.projectStatus.update(status => ({
        ...status,
        [project.name]: false,
      }));
    } finally {
      this.loading.hide();
    }
  }
}
