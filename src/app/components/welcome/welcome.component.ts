import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

// Declarar bootstrap como variable global
declare var bootstrap: any;

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="welcome-container">
      <!-- Grid de películas (fondo) usando Bootstrap -->
      <div class="movie-grid-background container-fluid">
        <!-- Espacio adicional al inicio para permitir scroll -->
        <div class="spacer"></div>
        <div class="row row-cols-4 g-3 mb-3"> <!-- Primera fila: 4 columnas -->
          <!-- Película 1 -->
          <div class="col">
            <div class="movie-card">
              <img 
                src="https://lh3.googleusercontent.com/proxy/lYIPNDLPn2ESE2ueY9FVv8OxWexOCK8I7mqZFb8joM-K3p8hRX6vzBycWYLTcS4jUUXQCtxfAHe-RHpFXjjPH_FPBclkvuqD2CvVgWohcQ"
                alt="Spider-Man: No Way Home"
                class="movie-poster"
              >
            </div>
          </div>
          <!-- Película 2 -->
          <div class="col">
            <div class="movie-card">
              <img 
                src="https://img.aullidos.com/imagenes/caratulas/it-2-poster-4.jpg"
                alt="The Batman"
                class="movie-poster"
              >
            </div>
          </div>
          <!-- Película 3 -->
          <div class="col">
            <div class="movie-card">
              <img 
                src="https://i5.walmartimages.com/asr/deaf2e49-0946-4bae-996a-befc2d602ba1.13a380cc3fd906e3d918e67b593e138a.jpeg"
                alt="Doctor Strange in the Multiverse of Madness"
                class="movie-poster"
              >
            </div>
          </div>
          <!-- Película 4 -->
          <div class="col">
            <div class="movie-card">
              <img 
                src="https://www.solopress.com/blog/wp-content/uploads/2017/05/final_destination.jpg"
                alt="Thor: Love and Thunder"
                class="movie-poster"
              >
            </div>
          </div>
        </div>

        <div class="row row-cols-4 g-3 mb-3"> <!-- Segunda fila: 4 columnas -->
          <!-- Película 5 -->
          <div class="col">
            <div class="movie-card">
              <img 
                src="https://moviepostermexico.com/cdn/shop/products/go7RqSDLPy6sh1Jwwvg0kwntGlX.jpg?v=1593661675"
                alt="Black Panther: Wakanda Forever"
                class="movie-poster"
              >
            </div>
          </div>
          <!-- Película 6 -->
          <div class="col">
            <div class="movie-card">
              <img 
                src="https://www.scifinow.co.uk/wp-content/uploads/2018/02/tomb_raider_ver2_xxlg.jpg"
                alt="Tomb Raider"
                class="movie-poster"
              >
            </div>
          </div>
          <!-- Película 7 -->
          <div class="col">
            <div class="movie-card">
              <img 
                src="https://moviepostermexico.com/cdn/shop/products/w3XORYUDxH53iiuWRw6nqrZdwybBM0kI88F9ccHiDmw_2048x.jpg?v=1619731898"
                alt="Avengers"
                class="movie-poster"
              >
            </div>
          </div>
          <!-- Película 8 -->
          <div class="col">
            <div class="movie-card">
              <img 
                src="https://www.carlosvillarin.com/wp-content/uploads/cartel-corredor-laberinto-2-carlos-villarin-freelance.jpg"
                alt="Maze Runner"
                class="movie-poster"
              >
            </div>
          </div>
        </div>

        <div class="row row-cols-4 g-3"> <!-- Tercera fila: 4 columnas -->
          <!-- Película 9 -->
          <div class="col">
            <div class="movie-card">
              <img 
                src="https://images-cdn.ubuy.pe/65662c38c7085c2c357fa16c-the-amazing-spiderman-movie-poster.jpg"
                alt="The Amazing Spider-Man"
                class="movie-poster"
              >
            </div>
          </div>
          <!-- Película 10 -->
          <div class="col">
            <div class="movie-card">
              <img 
                src="https://image.tmdb.org/t/p/original/1W9ya9MZwqUQZwKEYutStiD0HVS.jpg"
                alt="Joker"
                class="movie-poster"
              >
            </div>
          </div>
          <!-- Película 11 -->
          <div class="col">
            <div class="movie-card">
              <img 
                src="https://m.media-amazon.com/images/I/71Yt-BtAfEL._AC_UF894,1000_QL80_.jpg"
                alt="Inception"
                class="movie-poster"
              >
            </div>
          </div>
          <!-- Película 12 -->
          <div class="col">
            <div class="movie-card">
              <img 
                src="https://wallpapers.com/images/hd/movie-poster-background-zd9fqn8prhr9kewl.jpg"
                alt="Movie Background"
                class="movie-poster"
              >
            </div>
          </div>
        </div>

      </div>

      <!-- Sección central (en el centro) -->
      <div class="cta-section">
        <div class="logo-container">
          <i class="fas fa-film logo-icon"></i>
          <h1 class="site-name">PELIS<span class="highlight">GOOD</span></h1>
        </div>
        <h2 class="tagline">Disfruta de las mejores películas</h2>
        <p class="subtitle">La experiencia cinematográfica que mereces</p>
        
        <div class="features">
          <div class="feature-item">
            <i class="fas fa-tv"></i>
            <span>HD</span>
          </div>
          <div class="feature-item">
            <i class="fas fa-closed-captioning"></i>
            <span>Subtítulos</span>
          </div>
        </div>
        
        <div class="icons-container">
          <i class="fas fa-film"></i>
          <i class="fas fa-clapperboard"></i>
          <i class="fas fa-ticket-alt"></i>
        </div>
        
        <button (click)="closeModal()" class="cta-button">
          <i class="fas fa-play-circle me-2"></i>Explora las películas
        </button>
      </div>
    </div>
  `,
  styles: [`
    .welcome-container {
      min-height: 100vh;
      background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
    }

    .movie-grid-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 2rem;
      opacity: 0.3;
      z-index: 1;
      overflow-y: auto;
      height: 100vh;
      max-height: 100vh;
    }

    .movie-card {
      position: relative;
      overflow: hidden;
      border-radius: 8px;
      transition: transform 0.3s ease;
      height: 100%;
      aspect-ratio: 2/3;
      margin: 0 auto;
    }

    .movie-card:hover {
      transform: scale(1.05);
    }

    .movie-poster {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }

    .cta-section {
      text-align: center;
      color: white;
      padding: 3rem;
      background: rgba(0, 0, 0, 0.85);
      border-radius: 20px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.7);
      z-index: 10; /* Mayor z-index para asegurar que esté por encima */
      width: 90%;
      max-width: 650px;
      position: fixed; /* Cambiado de absolute a fixed para que permanezca fijo durante el scroll */
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      backdrop-filter: blur(15px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .logo-container {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
    }
    
    .logo-icon {
      font-size: 3.5rem;
      color: #e50914;
      margin-right: 1rem;
      filter: drop-shadow(0 0 10px rgba(229, 9, 20, 0.7));
      animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }
    
    .site-name {
      font-size: 3.5rem;
      font-weight: 900;
      letter-spacing: 2px;
      text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7);
      margin: 0;
    }
    
    .highlight {
      color: #e50914;
      font-weight: 900;
      position: relative;
    }
    
    .tagline {
      font-size: 2rem;
      margin: 0.5rem 0 1rem;
      font-weight: 600;
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
      color: #ffffff;
    }
    
    .subtitle {
      font-size: 1.2rem;
      margin-bottom: 2rem;
      color: #e0e0e0;
      letter-spacing: 1px;
      font-weight: 300;
    }
    
    .features {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-bottom: 2rem;
    }
    
    .feature-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: rgba(255, 255, 255, 0.1);
      padding: 1rem;
      border-radius: 10px;
      width: 100px;
      transition: all 0.3s ease;
    }
    
    .feature-item:hover {
      transform: translateY(-5px);
      background: rgba(229, 9, 20, 0.2);
    }
    
    .feature-item i {
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
      color: #e50914;
    }
    
    .feature-item span {
      font-size: 0.9rem;
      font-weight: 500;
    }

    .icons-container {
      display: flex;
      justify-content: center;
      gap: 3rem;
      margin-bottom: 2.5rem;
    }

    .icons-container i {
      font-size: 2.5rem;
      color: #e50914;
      transition: all 0.3s ease;
      filter: drop-shadow(0 0 10px rgba(229, 9, 20, 0.5));
    }

    .icons-container i:hover {
      transform: scale(1.2) rotate(5deg);
      color: #ff0a16;
    }

    .cta-button {
      background: #e50914;
      color: white;
      padding: 1.2rem 2.5rem;
      font-size: 1.2rem;
      border: none;
      border-radius: 30px;
      cursor: pointer;
      transition: all 0.3s ease;
      text-transform: uppercase;
      font-weight: bold;
      letter-spacing: 1px;
      box-shadow: 0 4px 20px rgba(229, 9, 20, 0.5);
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .cta-button:hover {
      background: #ff0a16;
      transform: translateY(-3px) scale(1.05);
      box-shadow: 0 7px 25px rgba(229, 9, 20, 0.7);
    }
  `]
})
export class WelcomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // Mostrar el modal automáticamente cuando se inicializa el componente
    setTimeout(() => {
      const modalElement = document.getElementById('welcomeModal');
      if (modalElement) {
        // Verificar si ya existe una instancia del modal
        let modal = bootstrap.Modal.getInstance(modalElement);
        if (!modal) {
          // Si no existe, crear una nueva instancia
          modal = new bootstrap.Modal(modalElement, {
            backdrop: 'static',
            keyboard: false
          });
        }
        modal.show();
      }
    }, 300); // Pequeño retraso para asegurar que el DOM está listo
  }

  closeModal() {
    const modal = document.getElementById('welcomeModal');
    if (modal) {
      const bsModal = bootstrap.Modal.getInstance(modal);
      if (bsModal) {
        bsModal.hide();
      }
      // Navegar a la lista de películas después de cerrar el modal
      this.router.navigate(['/']);
    }
  }
}
