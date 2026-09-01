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

export class SupabaseAwakeService {
  async pingProject(project: Project): Promise<any> {
    const url = `https://${project.subdomainUrl}.supabase.co/functions/v1/supabase-ping`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${project.bearerToken}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error ${response.status}: ${errorText}`);
    }
    return response.json();
  }
}
