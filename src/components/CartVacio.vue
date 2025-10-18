<script setup></script>
<template>
    <section class="cart-vacio">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag-icon lucide-shopping-bag bolsa"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>
        <h1 class="title">Tu Carrito Está Vacio</h1>
        <p class="text">Parece que aun no has agregado nada a tu carrito. Echale un vistazo a nuestos deliciosos panes de eucalipto y encuentra algo que te encante.</p>
        <router-link to="/Productos" class="boton"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>Explora Nuestros Productos</router-link>
    </section>
</template>
<style scoped>
.cart-vacio{
    width: 80%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
}
.bolsa{
  width: 8rem;
  height: 8rem;
  stroke-width: 1.4;
  color: #a08a69;
}
.title {
  font-size: clamp(2rem, 5vw + 0.7rem, 3rem);
  
  color: #3a3a3a;
  text-align: center;
}
.text{
  font-size: clamp(.8rem, 4vw + 0.6rem, 1.4rem);
  text-align: center;
  color: #3a3a3a;
  width: 60%;
}
.boton {
  width: fit-content;
  padding: 1rem 2rem;
  background-color: #ff6543;
  color: #fcf5ed;
  font-weight: 600;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  border-radius: 0.6rem;
  text-decoration: none;
  text-align: center;
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
@media(width < 768px){
  .cart-vacio{
    width:90%;
  }
  .text{
    width:100%;
  }
  .bolsa{
    width: 6rem;
    height: 6rem;
  }
  .boton{
       
        gap: .3rem;
        padding: 1.2rem 1rem ;
        justify-content: center;
        &:hover{
          background-color: #ff6543;
          color: #fcf5ed;
        }
        &:active{
      scale:.9;
    }
       
    }
}
</style>