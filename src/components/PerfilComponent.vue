<script setup>
import { useProductosStore } from '@/stores/productosStore';
import { storeToRefs } from 'pinia';
import Pedidos from './Pedidos.vue';


const {pedidos} = storeToRefs(useProductosStore())

pedidos.value.forEach((p)=>{
  console.log(p);
})

</script>
<template>
  <h1 class="title">Hola, estos son tus pedidos</h1>
  <div class="pedidos">
   
    <div v-if="pedidos.length === 0" class="vacio">
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package-open-icon lucide-package-open caja"><path d="M12 22v-9"/><path d="M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"/><path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"/><path d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"/></svg>
      <p>No tienes ningun pedido hasta ahora.</p>
     
     
    </div>

    <div v-else class="pedidos-container">
      <h2 class="pedidos-text">Mis Pedidos</h2>
      <div class="pedidos-wrapper">
        <Pedidos v-for="[producto] in pedidos"  :key="producto.id" :img="producto.img" :cantidad="producto.cantidad" :name="producto.name"></Pedidos>
      </div>
    </div>
  </div>
</template>
<style scoped>
.title {
  font-size: clamp(2.2rem, 5vw + 0.7rem, 3.2rem);
  color: #a08a69;
  text-align: center;
  opacity: 0;
  animation: letras 1.9s ease-out forwards;
  animation-delay: .2s;

}

@keyframes letras {
  0% {
    transform: translateX(-10rem);
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.pedidos {
  width: 80%;
  gap: 1.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
}
.pedidos-text {
  color: #3a3a3a;
  font-size: 2rem;
  text-decoration: underline;
}
.pedidos-container {
  display: flex;
  flex-direction: column;
  align-items: center;
width: 100%;
  gap: 1.6rem;
}
.vacio {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.vacio p {
  font-size: 1.7rem;
  font-weight: 500;
  color: #3a3a3a;
  text-align: center;
}
.caja{
  width: 13rem;
  height: 13rem;
  stroke-width: 1.1;
  color: #3a3a3a;
}
.pedidos-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1.4rem;
}

@media (width < 768px) {
    .pedidos{
        width: 90%;
    }
  
  .vacio p {
  font-size: 1.4rem;
}}
</style>
