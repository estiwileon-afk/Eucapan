<script setup>
import misha from '@/assets/misha.webp'
import estiff from '@/assets/estiff.webp'
import matias from '@/assets/matias.webp'
import sharlot from '@/assets/sharlot.webp'
import kimi from '@/assets/kimi.webp'
const personas = [
    {nombre: 'Jordan Alejandro', img: misha},
    {nombre: 'Estiff León', img: estiff},
    {nombre: 'Jair Matias', img: matias},
    {nombre: 'Sharlot Ramos', img: sharlot},
    {nombre: 'Kimberly Suarez', img: kimi},
]
</script>
<template>
    <section class="nosotros">
<section class="container-text">
    <h1 class="title">La Pasión Detras Del Pan</h1>
    <p class="text">En Eucanova, somos un equipo apasionado por la calidad y la sostenibilidad. Cada miembro aporta una perspectiva única, uniendo fuerzas para crear productos excepcionales que respetan el medio ambiente. Conoce a las personas que tejen la historia de nuestra marca.</p>
</section>

<section class="container-grid">
    <div v-for="persona in personas" :key="persona.nombre" class="card-person">
        <img loading="lazy" width="100" height="100" class="imagen" :src="persona.img" alt="persona.img">
        <span class="nombre">{{ persona.nombre }}</span>
    </div>
</section>


<section class="container-resumen">
    <h2 class="mision">Nuestra Misión</h2>
    <img loading="lazy" class="logo" src="/logo.webp" alt="">
    <p class="resumen">Cada miembro de nuestro equipo está comprometido con la excelencia y la innovación. Desde la selección de materiales hasta el diseño final, trabajamos en armonía para ofrecerte productos que no solo cumplen con tus expectativas, sino que las superan. Nuestra pasión por el eucalipto y su potencial nos impulsa a mejorar continuamente y a buscar nuevas formas de integrar la sostenibilidad en cada paso del proceso.</p>
</section>
    </section>
</template>
<style scoped>
.nosotros{
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 3.4rem;
    align-items: center;
    padding: 3rem 2rem;
    padding-bottom: 5rem;
}
.container-text{
    display: flex;
    width: 80%;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    text-align: center;
   
}
.title{
    font-size: clamp(2rem, 5vw + .8rem, 3.2rem);
     color: #ff6543;
}
.text{
    font-size: clamp(.8rem, 2vw + .7rem, 1.6rem);
     color: #3a3a3a;
}
.container-grid{
    display: grid;
    grid-template-columns: repeat(5,1fr);
    gap: 2rem;

    width: 80%;
}
.card-person{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
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
.imagen{
    width: 100%;
    object-fit: cover;
    height: 12rem;
    border-radius: .5rem;
    box-shadow: 0 5px 7px 0px #3a3a3a60;
}
.nombre{
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    color: #3a3a3a;
}
.container-resumen{
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
}
.mision{
    font-size: clamp(2rem, 5vw + .8rem, 3rem);
     color: #a08a69;
     text-align: center;
     margin-bottom: 1.5rem;
}
.logo{
    width:30%;
}
.resumen{
    font-size: clamp(.9rem, 2vw + .7rem, 1.5rem);
     color: #3a3a3a;
     text-align: center;
}
@media(width < 768px){
    .nosotros{
        padding: 3rem 1rem;
    }
    .container-text{
        width: 90%;
    }
    .container-grid{
        grid-template-columns: repeat(2,1fr);
        width: 90%;
    }
    .logo{
    width:50%;
}
}
</style>