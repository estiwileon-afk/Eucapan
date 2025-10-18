<script setup>
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import ProductoCarrito from './ProductoCarrito.vue';
import { useProductosStore } from '@/stores/productosStore';

const { carrito } = storeToRefs(useProductosStore())
const total = computed(()=>{
return carrito.value.reduce((a,producto)=>{
    return a + (producto.price * producto.cantidad);
},0)
})
function compraExitosa() {
  useProductosStore().añadirPedidos()
}
</script>
<template>
  <section class="carrito-lleno">
    <div class="titulos">
        <h1 class="title">Tu Carrito</h1>
        <button @click="carrito = []" class="boton vaciar" >Vaciar Carrito</button>
    </div>
    
    <div class="container-products">
        <div class="top">
            <span class="tipo">Producto</span>
            <div class="derecha">
                <span class="tipo">Precio</span>
            <span class="tipo">Cantidad</span>
            <span class="tipo">Sub Total</span>
            
            </div>
            
        </div>
        <div class="products">
            <ProductoCarrito v-for="producto in carrito" :key="producto.id" :img="producto.img" :name="producto.name" :precio="producto.price" :cantidad="producto.cantidad" :id="producto.id"></ProductoCarrito>
            
        </div>
    </div>
    <div class="container-order">
      <div class="order">
        <p class="label">Total</p>
        <span class="price">S/{{ total.toPrecision(3).replace('.',',') }}</span>
        
      </div>
      <RouterLink to="/MisPedidos" @click="compraExitosa" class="boton">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card-icon lucide-credit-card"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
        Realizar Pedido</RouterLink>
    </div>
  </section>
</template>
<style scoped>
.carrito-lleno {
  width: 64%;
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
}
.title {
  margin-right: auto;
  font-size: clamp(1.4rem, 5vw + 0.6rem, 2.4rem);
  margin-top: .5rem;
  color: #3a3a3a;
}
.container-products{
    display: flex;
   width: 100%;
    gap: 1rem;
    flex-direction: column;

}
.top{
    display: flex;
     width: 100%;
     padding-left: .6rem;
    justify-content: space-between;
    color: #3a3a3a;
    font-weight: 600;
    font-size: 1.1rem;
    opacity: .8;
}
.titulos{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    
}
.products{
    width: 100%;
}
.derecha{
    width: 50%;
    justify-content: space-between;
    display: flex;
    gap: 1rem;
  
}
.label{
    color: #3a3a3a;
    font-weight: 700;
    font-size: clamp(1.2rem, 3vw + .5rem, 1.8rem);
}
.container-order{
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
    border-top: 1px solid #a08a69;
    padding-top: 1.5rem;
width: 100%;
}

.order{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.price{
    color: #3a3a3a;
    font-weight: 700;
    font-size: clamp(1.2rem, 3vw + .5rem, 1.8rem);
}
.boton {
  width: 100%;
  padding: 1rem 2rem;
  background-color: #ff6543;
  color: #fcf5ed;
  font-weight: 600;
  font-size: 1.3rem;
  text-align: center;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
cursor: pointer;
  gap: 0.5rem;
  border-radius: 0.6rem;
  text-decoration: none;
  transition: all 0.2s ease-in;
  & svg {
    transition: all 0.2s ease-in;
  }
  &:hover {
    background-color: #d3c3b1;
    color: #3a3a3a;
    & svg {
      transform: translateX(1rem);
    }
  }
}
.tipo{
    text-align: end;
}
.vaciar{
    width: fit-content;
    background-color: #3a3a3a;
    padding: .5rem 1rem;
    &:hover{
      background-color: rgb(235, 30, 30);
      color: white;
    }
    
}
@media(width < 768px){
    .top{
        
        justify-content: space-between;
        gap: 2rem;
        padding-left: 0;
        
    }
    .boton{
        &:hover{
          background-color: #ff6543;
          color: #fcf5ed;
        }
        &:active{
      scale:.8;
    }
    .vaciar{
        &:active{
      scale:.8;
    }
    }
    }
    .derecha{
       
        width: fit-content;
      
    }
    .carrito-lleno{
        width:100%;
    }
}
</style>
