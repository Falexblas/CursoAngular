import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="register-container">
      <h2>Registro</h2>
      <form (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            [(ngModel)]="email" 
            name="email" 
            required
            class="form-control"
          >
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input 
            type="password" 
            id="password" 
            [(ngModel)]="password" 
            name="password" 
            required
            class="form-control"
          >
        </div>
        <div class="form-group">
          <label for="name">Nombre:</label>
          <input 
            type="text" 
            id="name" 
            [(ngModel)]="name" 
            name="name" 
            required
            class="form-control"
          >
        </div>
        <button type="submit" [disabled]="!formValid" class="btn btn-primary">
          Registrarse
        </button>
      </form>
      <div class="login-link">
        <a routerLink="/login">¿Ya tienes cuenta? Inicia sesión aquí</a>
      </div>
    </div>
  `,
  styles: [`
    .register-container {
      max-width: 400px;
      margin: 2rem auto;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .form-group {
      margin-bottom: 1rem;
    }
    label {
      display: block;
      margin-bottom: 0.5rem;
    }
    .form-control {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .btn-primary {
      width: 100%;
      padding: 0.75rem;
      background-color: #007bff;
      border: none;
      border-radius: 4px;
      color: white;
      cursor: pointer;
    }
    .btn-primary:disabled {
      background-color: #ccc;
      cursor: not-allowed;
    }
    .login-link {
      margin-top: 1rem;
      text-align: center;
    }
    a {
      color: #007bff;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  `]
})
export class RegisterComponent {
  email = '';
  password = '';
  name = '';
  @Output() closeModal = new EventEmitter<void>();

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  get formValid() {
    return this.email && this.password && this.name;
  }

  onSubmit() {
    if (!this.formValid) return;

    try {
      this.authService.register(this.email, this.password, this.name);
      alert('¡Registro exitoso! Ahora puedes iniciar sesión con tu cuenta.');
      this.closeModal.emit();
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      alert('Error al registrarse: ' + errorMessage);
    }
  }
}
