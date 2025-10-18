<script setup>
import CardPan from "@/components/CardPan.vue";
import { useProductosStore } from "@/stores/productosStore";
import { ref, onMounted } from "vue";


const productosStore = useProductosStore();
const productos = productosStore.productos.slice().sort(()=>0.5 - Math.random())

const eleccion = ref("all");
const productosCorrectos = ref(productos)
function filtrar(tipoPan) {
  if (eleccion.value === 'all') {
    productosCorrectos.value = productos;
  }else{
    productosCorrectos.value = [...productos].filter((producto) => producto.tipo === tipoPan);
  }
}

function setActive(tipoPan) {
  eleccion.value = tipoPan;
  filtrar(tipoPan);
}
onMounted(()=>{
    filtrar()
})


</script>
<template>

  <section class="productos">
    <section class="top">
      <h1 class="title">Nuestra Colección de Panes</h1>
      <p class="text">
        Descubre nuestra exclusiva gama de panes infusionados con eucalipto,
        elaborados con esmero y pensados para un paladar moderno.
      </p>
    </section>
    <section class="select-productos">
      <div class="select-container">
        <span
          :class="eleccion === 'all' ? 'active' : ''"
          @click="setActive('all')"
          class="select"
          >Todos</span
        >
        <span
          :class="eleccion === 'Sourdough' ? 'active' : ''"
          @click="setActive('Sourdough')"
          class="select"
          >Sourdough</span
        >
        <span
          :class="eleccion === 'Baguette' ? 'active' : ''"
          @click="setActive('Baguette')"
          class="select"
          >Baguette</span
        >
        <span
          :class="eleccion === 'Multigrano' ? 'active' : ''"
          @click="setActive('Multigrano')"
          class="select"
          >Multigrano</span
        >
      </div>
    </section>

    
      <section  class="productos-container">
  
  <CardPan  :class="productosCorrectos.indexOf(producto) % 2 === 0 ? 'abajo' : '' "
        v-for="producto in productosCorrectos"
        :key="producto.id"
        :img="producto.img"
        :name="producto.nombre"
        :price="producto.precio"
        :type="producto.tipo"
        
      ></CardPan>
        
      
    </section>
    
    
  </section>
</template>
<style scoped>
.productos {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  padding: 4rem 3rem;
}
.top {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 70%;
  align-items: center;
  text-align: center;
}
.title {
  font-size: clamp(1.8rem, 5vw + 0.8rem, 3rem);
  font-weight: 700;
  color: #3a3a3a;
}
.text {
  font-size: clamp(1rem, 4vw + 0.5rem, 1.5rem);
  color: #a08a69;
}
.select-productos {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.select-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
.select {
  background-color: #d8bb9b;
  border-radius: 1rem;
  padding: 0.6rem 1.2rem;
  cursor: default;
  color: #3a3a3a;
  font-weight: 500;
  text-align: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
   
  }
}
.active {
  background-color: #ff6543;
  color: #fcf5ed;
  &:hover {
    transform: scale(1);
   
  }
}
.productos-container {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  width: 93%;
  min-height:max-content;
  margin-top: 3rem;
  justify-content: center;
  position: relative;
  margin-bottom: 4rem;
  gap: 2rem 1.5rem;
}
.abajo{
  margin-top: 4rem;
}
@media (width < 1100px) {
  .productos-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (width < 768px) {
  .productos {
    padding: 3rem 1rem;
    padding-bottom: 1rem;
  }

  .top {
    width: 100%;
  }
  .select-container {
    grid-template-columns: repeat(2, 1fr);
  }
  .select:active {
    transform: scale(1.1);
  }
  .abajo{
    margin-top: 0;
  }
  .productos-container {
    grid-template-columns: repeat(1, 1fr);
    position: relative;
  }
  
}
</style>
