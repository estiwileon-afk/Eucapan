<script setup></script>
<template>
  <footer class="footer">
    <div class="container">
      <span>Eucanova</span>
      <p>@ 2025 Todos los Derechos Reservados</p>
    </div>

    <div class="container-2">
      <p class="politicas">Politicas de Privacidad</p>
      <p class="politicas">Terminos de Servicio</p>
    </div>
    <div class="container-3">
      <a href="https://www.facebook.com/profile.php?id=61583910912498" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-facebook-icon lucide-facebook"
        >
          <path
            d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
          />
        </svg>
        <span>Eucanova Pasco</span>
      </a>
      <a href="https://www.instagram.com/eucanovapasco?igsh=dnFyM2x0dTg5NmQ1" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        <span>Eucanova Pasco</span>
      </a>
    </div>
  </footer>
</template>
<style scoped>
.footer {
  width: 100%;
  padding: 3rem;
  z-index:100;
  height: max-content;  
gap: 3rem;
  display: grid;
  border-top: 1px solid #d3c3b1;
  grid-template-columns: repeat(3, 1fr);
}
.container {
  font-size: 1.1rem;
  display: flex;
  flex-direction: column;
  color: #3a3a3a;
  justify-content: end;

  gap: 0.6rem;
  & span {
    font-size: 1.4rem;
    font-weight: 700;
  }
}
.container-2 {
  display: flex;
  font-size: 1.1rem;
  justify-content: end;
  color: #3a3a3a;
  opacity: 0.7;
  text-align: center;
  align-items: center;
  gap: 2.5rem;
}
.container-3 {
  display: flex;
  gap: .5rem;
  font-size: 1.1rem;
  justify-content: end;
  color: #3a3a3a;
  align-items: end;
  & a {
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 0.3rem;

    &:hover svg {
      color: #ff6543;
    }
    &:hover span {
      color: #ff6543;
    }
    & svg {
      transition: all 0.2s ease;
      color: #3a3a3a;
    }
    & span {
      transition: all 0.2s ease;
      color: #3a3a3a;
      font-weight: 600;
    }
  }
}
@media (width < 768px) {
  .footer {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
    gap: 1rem;
    padding: 2rem 1rem;
  }
  .container {
    align-items: center;
    text-align: center;
  }
  .container-2 {
    text-align: center;
  }
  .container-3 {
    & a {
      &:hover svg {
        color: #3a3a3a;
      }
      &:hover span {
        color: #3a3a3a;
      }
      &:active svg {
        color: #ff6543;
      }
      &:active span {
        color: #ff6543;
      }
    }
  }
}
</style>
