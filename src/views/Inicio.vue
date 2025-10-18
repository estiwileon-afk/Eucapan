<script setup>

import panClasico from "@/assets/pan_clasico.webp";
import panMasa from "@/assets/pan_masa.webp";
import panBaguette from "@/assets/pan_baguette.webp";

</script>
<template>
  <section class="inicio">
    <section class="hero">
      <div class="text-container">
        <h1 class="title">
          Descubre el Sabor Único de Nuestros Panes de Eucalipto
        </h1>
        <p class="hero-text">
          Experimenta el aroma refrescante y el sabor sutil de nuestro pan
          artesanal de eucalipto. Horneado diariamente con los mejores
          ingredientes.
        </p>
        <router-link class="hero-boton" to="/Productos"
          ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>Comprar Ahora</router-link
        >
      </div>
      
        <div class="image-container">
<img  width="690" height="460" src="/hero.webp" alt="hero" loading="eager" />
</div>
     
      
        
    </section>
    <section class="productos">
      <h2>Nuestros Principales Productos</h2>
      <div class="productos-container">
        <div class="producto">
          <img class="producto-img" :src="panClasico" loading="lazy" alt="clasico" />
          <div class="producto-texto">
            <span class="producto-title">Pan de Eucalipto</span>
            <p class="producto-text">
              Nuestro pan clásico, perfecto para cualquier ocasión.
            </p>
          </div>
        </div>
        <div class="producto">
          <img class="producto-img" :src="panMasa" loading="lazy" alt="masa" />
          <div class="producto-texto">
            <span class="producto-title">Sourdough de Eucalipto</span>
            <p class="producto-text">
              Ácido y sabroso, el sueño de quien ama la Sourdough.
            </p>
          </div>
        </div>
        <div class="producto">
          <img class="producto-img" :src="panBaguette" loading="lazy" alt="Baguette" />
          <div class="producto-texto">
            <span class="producto-title">Baguette de Eucalipto</span>
            <p class="producto-text">
              Crujiente y aromática, ideal para sándwiches.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="caracteristicas">
      <div class="carac-texto">
        <h3 class="carac-title">¿Por Qué Escoger Pan de Eucalipto</h3>
        <p class="carac-text-top">
          Nuestros panes de eucalipto ofrecen una mezcla de saber y beneficios
          saludables, creando una deliciosa y sana desición.
        </p>
      </div>
      <div class="carac-container">
        <div class="caracteristica">
          <div class="icon-container">
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
              class="lucide lucide-leaf-icon lucide-leaf"
            >
              <path
                d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
              />
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
            </svg>
          </div>
          <span class="caracteristica-title">Aroma Refrescante</span>
          <p class="caracteristica-texto">
            Disfruta la esencia fresca del eucalipto en cada bocado.
          </p>
        </div>
        <div class="caracteristica">
          <div class="icon-container">
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
              class="lucide lucide-flower-icon lucide-flower"
            >
              <circle cx="12" cy="12" r="3" />
              <path
                d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"
              />
              <path d="M12 7.5V9" />
              <path d="M7.5 12H9" />
              <path d="M16.5 12H15" />
              <path d="M12 16.5V15" />
              <path d="m8 8 1.88 1.88" />
              <path d="M14.12 9.88 16 8" />
              <path d="m8 16 1.88-1.88" />
              <path d="M14.12 14.12 16 16" />
            </svg>
          </div>
          <span class="caracteristica-title">Ingredientes Naturales</span>
          <p class="caracteristica-texto">
            Hecho con puros ingredientes naturales y sin preservantes.
          </p>
        </div>
        <div class="caracteristica">
          <div class="icon-container">
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
              class="lucide lucide-clock-icon lucide-clock"
            >
              <path d="M12 6v6l4 2" />
              <circle cx="12" cy="12" r="10" />
            </svg>
          </div>
          <span class="caracteristica-title">Recien Horneados</span>
          <p class="caracteristica-texto">
            Horneados al momento para asegurar la calidad y sabor.
          </p>
        </div>
      </div>
    </section>
    <section class="ready">
      <h3 class="ready-title">¿Listo Para Siempre Disfrutar de un Pan Fresco?</h3>
      <p class="ready-text">Explora nuestra selección de panes de eucalipto y descubre tu favorito.</p>
      <router-link to="/Productos" class="hero-boton ready-boton"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>Explora Nuestros Productos</router-link>
    </section>
  </section>
</template>
<style scoped>
.inicio {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.5rem;
  padding-bottom: 3rem;
}
.hero {
  width: 100%;
  display: flex;
  height: calc(100svh - 4rem);
  padding: 3rem;
  gap: 2rem;
}

.image-container {
  width: 100%;
height: 100%;
  
  & img{
    height: 100%;
    object-fit: cover;
    border-radius: .6rem;
    width: 100%;
  }
}
.text-container {
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 100%;
  flex-direction: column;
  text-align: start;
}
.title {
  font-size: clamp(2.1rem, 5vw + 0.8rem, 4rem);
  color: #3a3a3a;
  font-weight: 700;
}
.hero-text {
  font-size: clamp(1.2rem, 1vw + 0.7rem, 1.7rem);
  color: #a08a69;
  font-weight: 500;
}
.hero-boton {
  width: fit-content;
  padding: 1rem 2rem;
  background-color: #ff6543;
  color: #fcf5ed;
  font-weight: 600;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  
  gap: .5rem;
  border-radius: 0.6rem;
  text-decoration: none;
  transition: all 0.2s ease-in;
  & svg{
      transition: all 0.2s ease-in;
    }
  &:hover {
    background-color: #d3c3b1;
    color: #3a3a3a;
    & svg{
      transform: translateX(5px);
    }
  }
  
}

.productos {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  gap: 3.6rem;
}
.productos h2 {
  color: #a08a69;
  font-size: clamp(1.5rem, 5vw + 0.5rem, 2.7rem);
}
.productos-container {
  justify-items: center;
  width: 100%;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(3, 1fr);
}
.producto {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
  height: max-content;
  animation: fade-in both ease;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;
}
.producto-img {
  width: 100%;
  object-fit: cover;
  border-radius: 0.7rem;
  height: 90%;
}
.producto-texto {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}
.producto-text {
  color: #a08a69;
}
.producto-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: #3a3a3a;
}
.caracteristicas{
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 80%;
  padding: 5rem 2rem;
  align-items: center;
  text-align:center;
  background-color: #d8bb9b;
  border-radius: .8rem;
}
.carac-texto{
  display: flex;
  width: 80%;
  flex-direction: column;
  gap: .8rem;
}
.carac-title{
  font-size:clamp(1.5rem, 3vw + .8rem, 2.3rem);
  color: #3a3a3a;
}
.carac-text-top{
  font-size:clamp(.7rem, 3vw + .5rem, 1.3rem);
  color: #3a3a3a;
}
.carac-container{
  display: flex;
  gap: 1.5rem;
}
.caracteristica{
  background-color: #fcf5ed;
  border-radius: .5rem;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 1.5rem;
  animation: fade-in both ease;
  animation-timeline: view();
  animation-range: entry 0% cover 30%;
}
@keyframes fade-in {
  0%{
    transform: translateY(20rem);
    opacity: 0;
  }
  100%{
    transform: translateY(0rem);
    opacity: 1;
  }
}
.icon-container{
  padding: 1rem;
  height: fit-content;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items:center;
  background-color: #b0b0b02c;
  border-radius: 100%;
  & svg{
    color: #ff6543;
  }
}
.caracteristica-title{
  font-size: 1.4rem;
  font-weight: 600;
  color: #3a3a3a;
}
.caracteristica-texto{
  color: #a08a69;
}
.ready{
  display: flex;
  padding: 3rem;
  padding-bottom: 4rem;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
}
.ready-title{
  font-size:clamp(1.2rem, 3vw + .7rem, 2rem);
  color: #3a3a3a;
}
.ready-text{
font-size:clamp(.7rem, 3vw + .5rem, 1.5rem);
color: #a08a69;
}
.ready-boton{
  margin-top: 1rem;
}
@media (height > 800px) {
  .hero {
    height: max-content;
  }
}
@media (width <= 768px) {
  .hero {
    padding: 2rem 1rem;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    justify-content: start;
   

  }

  .image-container {
    width: 80%;
    display: flex;
    margin-bottom: auto;
    align-items: start;
    & img{
     aspect-ratio: 16/9;
     height: 90%;
      object-fit: cover;
    }
  }
  .text-container {
    text-align: center;
    gap: 1rem;
    justify-content: start;
    align-items: center;
  }
  .hero-boton {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
    &:active{
      scale:.8;
    }
  }
  .productos {
    text-align: center;
  }
  .productos-container {
    grid-template-columns: repeat(1, 1fr);
  }
  .producto {
    height: max-content;
  }
  .producto-img {
    height: 100%;
  }
  .carac-container{
    flex-direction: column;

  }
  .carac-texto{
    width: 100%;
  }
  .caracteristicas{
    padding-block: 3rem;
    gap: 1.5rem;
  }
  .ready{
    padding-block: 1.5rem;
    gap: 1rem;
  }
  .ready-boton{
    &:active{
      scale:.8;
    }
  }
}
</style>
