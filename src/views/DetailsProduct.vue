<script setup>
import PopUp from "@/components/PopUp.vue";
import { useProductosStore } from "@/stores/productosStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useRoute } from "vue-router";

const show = ref(false)
function mostrar() {
  show.value = true
  setTimeout(()=>{
    show.value = false
  },2000)
}
const ruta = useRoute()
const storeProductos = useProductosStore()
const nombre = ruta.params.name
const producto = storeProductos.getName(nombre)

const cantidad = ref(1)

const productosComprados = ref({
  name:producto.nombre,
  price:producto.precio,
  cantidad: cantidad,
  id: producto.id,
  img: producto.img
})
const {carrito} = storeToRefs(storeProductos)
const {isProduct} = storeToRefs(storeProductos)
function añadirCarrito(productoElegido) {
    isProduct.value = true
    const productoExistente = carrito.value.find((p) => p.id === producto.id);
    if (productoExistente) {
      
      productoExistente.cantidad += productoElegido.cantidad
    
    } else {
      const nuevoProducto = {
      id: producto.id,
      name: producto.nombre,
      price:  producto.precio,
      cantidad: cantidad.value,
      img: producto.img
    }

    carrito.value.push(nuevoProducto)
    }
    
  }


</script>
<template>
  <teleport to="body">
    <transition mode="out-in">
       <PopUp v-show="show"></PopUp>
    </transition>

  </teleport>

  
  <section class="details">
    <div class="container-image">
      <img
        height="500"
        width="500"
        class="image"
        :src="producto.img"
        alt=""
        loading="eagers"
      />
    </div>
    <div class="product-details">
      <div class="text-container">
        <h1 class="title">{{ producto.nombre }}</h1>
        <p class="text">{{producto.descripcion}}</p>
      </div>
      <div class="buy-container">
        <span class="price">S/{{producto.precio.toPrecision(3).replace('.',',')}}</span>
        <div class="carrito">
          <button @click="añadirCarrito(productosComprados);mostrar() " class="boton">
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
              class="lucide lucide-shopping-cart-icon lucide-shopping-cart"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path
                d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
              />
            </svg>
            Añadir al Carrito
          </button>
          
          <div class="añadir">
            <button @click="cantidad <= 1 ? cantidad = 1 : cantidad--" class="menos">
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
                class="lucide lucide-minus-icon lucide-minus"
              >
                <path d="M5 12h14" />
              </svg>
            </button>

            <p class="cantidad">{{ cantidad }}</p>
            <button @click="cantidad++" class="mas">
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
                class="lucide lucide-plus-icon lucide-plus"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.v-enter-active,
.v-leave-active{
  transition: all .5s ;
}
.v-enter-from{
  transform: translateX(50vw);
  opacity: 0;
}
.v-leave-to{
 
  opacity: 0;
}
.details {
  display: flex;
  width: 100%;
  min-height: calc(100svh - 4rem);
 height: calc(100svh - 4rem);
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  gap: 3rem;
}
.container-image {
  height: 100%;
  width: 50%;
}
.image {
  width: 100%;
  border-radius: 0.5rem;
  object-fit: cover;
  height: 100%;
}
.product-details {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
  color: #3a3a3a;
}
.text-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 95%;
}
.title {
  font-size: clamp(1.4rem, 4vw + .8rem, 3.3rem);
}
.text {
  font-size: clamp(0.8rem, 2vw + 0.8rem, 1.8rem);
  color: #a08a69;
}
.buy-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.añadir {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: max-content;
}
.mas,
.menos {
  padding: 0.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 0.6rem;
  color: #3a3a3a;
  transition: all 0.1s ease;
  &:hover {
    background-color: #d3c3b1;
  }
  &:active {
    transform: scale(0.8);
  }
}
.price {
  font-size: 2.1rem;
  font-weight: 800;
}
.carrito {
  display: flex;
  flex-direction: column-reverse;
  gap: 1.5rem;
}
.boton {
  width: fit-content;
  padding: 1rem 2rem;
  background-color: #ff6543;
  color: #fcf5ed;
  font-weight: 600;
  font-size: 1.2rem;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 0.7rem;
  border-radius: 0.6rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in;
  user-select: none;
  & svg {
    transition: all 0.2s ease-in;
  }
  &:hover {
    background-color: #d3c3b1;
    color: #3a3a3a;
    & svg {
      transform: translateX(5px);
    }
  }
}
.cantidad {
  border: 2px solid #3a3a3a;
  border-radius: 0.6rem;
  padding: 0.8rem 1.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3a3a3a;
  font-weight: 700;
  user-select: none;
  font-size: 1.1rem;
  width: 5rem;
}

@media(width < 768px){
    .details{
        flex-direction: column;
        height:calc(100svh - 4rem);
        min-height:100%;
        justify-content: start;
        gap: 2rem;
        padding: 1rem 1.5rem;
    }
    .container-image{
        height: 40%;
       width: 60%;
        display: flex;
        justify-content: center;
    }
    .product-details{
        width: 100%;
        justify-content: start;
        gap: .8rem;
    }
    .text-container{
        width: 100%;
       
        align-items: center;
    }
    .image{
       height: 100%;
       width: 100%;
      
    }
    .añadir{
        align-self: center;
    }
    .carrito{
        gap: 2rem;
    }
    .cantidad{
        font-size: 1rem;
    }
    .mas,.menos{
        &:active{
            background-color: #d3c3b1;
        }
    }
    .price{
      font-size: 1.9rem;
    }
    .buy-container{
      gap: .8rem;
    }
    .boton{
        width: 100%;
        justify-content: center;
        font-size: 1rem;
        &:hover{
          background-color: #ff6543;
          color: #fcf5ed;
        }
        &:active{
      scale:.9;
    }
    }
}
@media(height > 800px){
  .details{
        flex-direction: column;
        min-height:calc(100svh - 4rem);
        height:auto;
       justify-content: center;
        
    }
    .container-image{
      min-width: 100%;
        height: 100%;
       
       
    }
    .image{
       height: 100%;
       width: 100%;
      
    }
    .product-details{
      display: flex;
      gap: 2rem;
    
        justify-content: space-between;
   
    }
}
</style>
