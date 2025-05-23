import { Component, OnInit, ViewChild, ElementRef, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { FormsModule } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';

@Component({
  imports: [CommonModule, RouterLink, RouterLinkActive, FormsModule],
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  categories: Category[] = [];
  searchTerm: string = '';
  isLoggedIn = false;
  userName = '';

  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;

  private categoryService = inject(CategoryService);
  private router = inject(Router);
  private authService = inject(AuthService);

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (!event.url.startsWith('/buscar')) {
          this.searchTerm = '';
          if (this.searchInput) {
            this.searchInput.nativeElement.value = '';
          }
        }
      });

    this.authService.isLoggedIn$.subscribe(logged => this.isLoggedIn = logged);
    this.authService.userName$.subscribe(name => this.userName = name);
  }

  register() {
  // Simulación rápida: en una app real mostrarías un formulario
  try {
    this.authService.register('demo@email.com', '1234', 'Demo');
    alert('Usuario registrado y logueado');
  } catch (e) {
    alert('El usuario ya existe');
  }
}

  login() {
    // Aquí deberías mostrar un modal o formulario real
    // Simulación rápida:
    try {
      this.authService.login('demo@email.com', '1234', 'Demo');
    } catch (e) {
      alert('Credenciales incorrectas o usuario no registrado');
    }
  }

  logout() {
    this.authService.logout();
  }

  trackById(index: number, category: Category): number {
    return category.id;
  }

  onSearch(event: Event): void {
    event.preventDefault();
    const query = this.searchTerm.trim();
    if (query) {
      this.router.navigate(['/buscar'], { queryParams: { q: query } });
    }
  }
}