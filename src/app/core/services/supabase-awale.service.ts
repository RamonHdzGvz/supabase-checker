import { Injectable, inject } from '@angular/core';
import { SupabaseService } from './supabase/supabase.service';

export interface Project {
  name: string;
  subdomainUrl: string;
  functionName: string;
  bearerToken: string;
}

@Injectable({
  providedIn: 'root',
})

export class SupabaseAwaleService {
  private supabase = inject(SupabaseService);
  /*
    async pingProjectDummy(project: Project): Promise<any> {
      return this.supabase.callFunction(project.functionName, {
        method: 'POST',
        body: { ping: true }
      });
    }
  */
  async pingProject(project: Project): Promise<any> {
    const url = `https://${project.subdomainUrl}.supabase.co/functions/v1/${project.functionName}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${project.bearerToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ping: true })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error ${response.status}: ${errorText}`);
    }

    return response.json();
  }
}
