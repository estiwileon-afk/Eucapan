<script setup>
import { useProductosStore } from "@/stores/productosStore";
import { storeToRefs } from "pinia";
import { computed } from "vue";
const props = defineProps({
  img: String,
  id: Number,
  name: String,
  cantidad: Number,
  precio: Number,
});
const subTotal = computed(() => {
  return eval(props.precio * props.cantidad);
});
const { carrito } = storeToRefs(useProductosStore());
function removerProducto() {
  carrito.value = carrito.value.filter((producto) => producto.id !== props.id);
}
</script>
<template>
  <div class="producto-container">
    <div class="izquierda">
        <img width="50" height="50" class="imagen" :src="img" :alt="img" />
    <div class="producto">
      <span class="title">{{ name }}</span>
      <button @click="removerProducto" class="boton">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-trash2-icon lucide-trash-2"
        >
          <path d="M10 11v6" />
          <path d="M14 11v6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
          <path d="M3 6h18" />
          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      </button>
    </div>
    </div>
    
    <div class="derecha">
      <p class="price">S/{{ precio.toPrecision(3).replace(".", ",") }}</p>
      <p class="cantidad">{{ cantidad }}</p>
      <p class="subtotal">S/{{ subTotal.toPrecision(3).replace(".", ",") }}</p>
    </div>
  </div>
</template>
<style scoped>
.producto-container {
  display: flex;
  border-top: 1px solid #d8bb9b;
  padding: 1.2rem 0;
  align-items: center;
  justify-content: space-between;
  height: 8rem;
}
.izquierda{
    height: 100%;
    display: flex;
}
.imagen {
  height: 100%;
  width: 6rem;
  border-radius: 0.4rem;
  object-fit: cover;
}
.producto {
  display: flex;
  height: 100%;
  width: max-content;
  flex-direction: column;
  margin-right: auto;
  margin-left: 1.3rem;
  gap: 0.5rem;
  justify-content: center;
}
.title {
  font-weight: 600;
  color: #3a3a3a;
  font-size: clamp(1rem, 2vw + .4rem,1.2rem)
}
.derecha {
  width: 50%;
  justify-content: space-between;
  display: flex;
  align-items: center;
  gap: 1rem;
}
.price,
.cantidad {
  font-size: 1.25rem;
  font-weight: 500;
}
.cantidad {
  border: 2px solid #d3c3b1;
  padding: 0.6rem 2rem;
  border-radius: 0.6rem;
}
.subtotal {
  font-size: 1.4rem;
  font-weight: 700;
}
.boton {
  width: fit-content;
  height: fit-content;
  padding: 0.6rem 1rem;
  background-color: #3a3a3a;
 
  color: white;
  font-weight: 500;
  font-size: 1.1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 0.5rem;
  border-radius: 0.6rem;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgb(235, 30, 30);
    color: white;
  }
}
@media(width < 768px){
    .producto-container{
        height: min-content;
        width: 100%;
        justify-content: space-between;
        gap: 1rem;
    }
  .izquierda{
    width: 100%;
    flex-direction: column;
    gap:.7rem;
    justify-content: center;
  }
  .imagen{
    width: 80%;
  }
  .derecha{
    width: max-content;
  }
  .producto{
    margin-left:0;
    width: 100%;
  }
.price,
.cantidad {
  font-size: 1.2rem;
  margin-right: 1rem;

}
.cantidad {
  border: 2px solid #d3c3b1;
  padding: 0.4rem 1rem;
  border-radius: 0.7rem;
  
}
.subtotal {
  font-size: 1.2rem;

}
.boton{
    &:hover{
          background-color: #ff6543;
          color: #fcf5ed;
        }
        &:active{
      scale:.8;
    }
}
.boton svg{
 width: 16px;
 height: 16px;
}
}
</style>
