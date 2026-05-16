import { Injectable, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseClientService } from './supabase-client.service';
import { User } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);
  private supabase = inject(SupabaseClientService);

  private userSignal = signal<User | null>(null);
  user = this.userSignal.asReadonly();

  constructor() {
    this.checkUser();
  }

  private async checkUser() {
    const { data: { session } } = await this.supabase.getClient().auth.getSession();
    this.userSignal.set(session?.user ?? null);

    this.supabase.getClient().auth.onAuthStateChange((_event, session) => {
      this.userSignal.set(session?.user ?? null);
    });
  }

  async signIn(email: string, password: string) {
    return await this.supabase.getClient().auth.signInWithPassword({
      email,
      password,
    });
  }

  async logOut() {
    await this.supabase.getClient().auth.signOut();
    this.userSignal.set(null);
  }

  async resetPassword(email: string) {
    return await this.supabase.getClient().auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/nueva-contrasena`,
    });
  }

  async updatePassword(newPassword: string) {
    return await this.supabase.getClient().auth.updateUser({
      password: newPassword,
    });
  }

}