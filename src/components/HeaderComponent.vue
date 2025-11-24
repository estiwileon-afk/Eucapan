<script setup>  
import { useProductosStore } from "@/stores/productosStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { RouterLink } from "vue-router";
let isOpen = ref(false);

function toogleMenu() { 
  isOpen.value = !isOpen.value

if(isOpen.value && window.innerWidth < 768){
    document.body.style.overflow = 'hidden'
  }else{
    document.body.style.overflow = 'scroll'
  }
}
const {isProduct} = storeToRefs(useProductosStore());
   function cambiarPulso(){
    isProduct.value = false;
    console.log(isProduct.value)
   }
</script> 
<template>
  <header class="header">
    <div class="logo-container">
      <img
        height="40px"
        width="40px"
        class="logo"
        src="/logo.webp"
        alt="Logo"
      />
      <span class="logo-text">Eucanova</span>
    </div>
    <div class="nav-container desk">
      <nav class="navbar">
        <RouterLink to="/" class="link">Inicio</RouterLink>
        <RouterLink :class="{ 'router-link-active': $route.path.startsWith('/Productos') }" to="/Productos" class="link">Productos</RouterLink>
        <RouterLink to="/SobreNosotros" class="link">Sobre Nosotros</RouterLink>
      </nav>
    </div>
    <div class="shop-perfil desk">
      <RouterLink to="/Carrito" @click="cambiarPulso" class="shop">
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
          class="lucide lucide-shopping-cart-icon lucide-shopping-cart shop-icon"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path
            d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
          />
        </svg>
        <div  class="cantidad-comprada" :class="isProduct ? 'active' :''"></div>
      </RouterLink>
      <RouterLink to="/MisPedidos" class="perfil">
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
          class="lucide lucide-user-round-icon lucide-user-round perfil-icon"
        >
          <circle cx="12" cy="8" r="5" />
          <path d="M20 21a8 8 0 0 0-16 0" />
        </svg>
      </RouterLink>
    </div>
    <RouterLink @click="cambiarPulso" to="/Carrito" class="shop movil">
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
        class="lucide lucide-shopping-cart-icon lucide-shopping-cart shop-icon"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path
          d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
        />
      </svg>
      <div :class="isProduct ? 'active' :''" class="cantidad-comprada"></div>
    </RouterLink>
    <div @click="toogleMenu" class="menu movil">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>

    <div :class="{ open: isOpen }" class="lateral-menu movil">
      <div class="header-menu">
        <p>Menú</p>
      </div>

      <nav class="nav-movil">
        <RouterLink @click="toogleMenu" to="/" class="link">
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
              class="lucide lucide-house-icon lucide-house"
            >
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
              <path
                d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
              />
            </svg>
          </div>
          <p>Inicio</p>
        </RouterLink>
        <RouterLink :class="{ 'router-link-active': $route.path.startsWith('/Productos') }" @click="toogleMenu" to="/Productos" class="link">
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
              class="lucide lucide-shopping-bag-icon lucide-shopping-bag"
            >
              <path d="M16 10a4 4 0 0 1-8 0" />
              <path d="M3.103 6.034h17.794" />
              <path
                d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"
              />
            </svg>
          </div>
          <p>Productos</p>
        </RouterLink>
        <RouterLink @click="toogleMenu" to="/SobreNosotros" class="link">
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
              class="lucide lucide-info-icon lucide-info"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
          </div>
          <p>Sobre Nosotros</p>
        </RouterLink>
        
      </nav>

      <div class="footer-menu">
        <div class="perfil-container">
          <RouterLink @click="toogleMenu" to="/MisPedidos" class="link ">
          <div class="icon-container">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
          </div>
          <p>Mis Pedidos</p>
        </RouterLink>
          
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
.header {
  display: flex;
  width: 100%;
  height: 4rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  
  
}
.logo-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-text {
  margin-top: 0.4rem;
  color: #3a3a3a;
  font-size: 1.9rem;
  font-weight: 700;
}
.nav-container {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-right: 1.5rem;
  margin-left: auto;
}
.navbar {
  display: flex;
  gap: 2rem;
}
.link {
  color: #3a3a3a;
  font-weight: 500;
  font-size: 1.25rem;
  margin-top: .2rem;
  transition: all 0.2s ease;
}
.link:hover {
  color: #d8bb9b;
}
.link.router-link-active {
  color: #f05b3a;
  &:hover{
    color: #f05b3a;
  }
}
.link-active{
color: #f05b3a;
  &:hover{
    color: #f05b3a;
  }
}

.perfil.router-link-active {
  background-color: #f05b3a;
  color:#fcf5ed;
  &:hover{
    background-color: #f05b3a;
  }
}
.shop.router-link-active {
  background-color: #f05b3a;
  color:#fcf5ed;
  &:hover{
    background-color: #f05b3a;
  }
}
.shop-perfil {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.shop {
  border-radius: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b0b0b02c;
  width: 40px;
  height: 40px;
  color: #3a3a3a;
  transition: all 0.2s ease;
  position: relative;
  &:hover {
    background-color: #b0b0b065;
  }
}
.cantidad-comprada {
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 100%;
  width: 0.9rem;
  height: 0.9rem;
  top: -1px;
  right: -1px;
  background-color: #f05b3a;
}
.active {
  display: flex;
  animation: pulse 1.1s linear;
  animation-iteration-count: 5;
}

.perfil {
  border-radius: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b0b0b02c;
  width: 40px;
  height: 40px;
  color: #3a3a3a;
  transition: all 0.2s ease;
  &:hover {
    background-color: #b0b0b065;
  }
}
.desk {
  display: flex;
}
.movil {
  display: none;
}
@media (width < 768px) {
  .header {
    padding: 0 1.3rem;
  }
  .desk {
    display: none;
  }
  .movil {
    display: flex;
  }
  .menu {
    z-index: 101;
    height: 16px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 0.3rem;

    
  }
  .header:has(.open) .line:nth-child(1) {
    opacity: 0;
  }
  .header:has(.open) .line:nth-child(2) {
    transform: rotateZ(45deg);
  }
  .header:has(.open) .line:nth-child(3) {
    transform: rotateZ(-45deg) translateY(-250%) translateX(25%);
  }

  .line {
    height: 2px;
    background-color: #3a3a3a;
    width: 20px;
    transition: transform 0.3s ease, opacity 0.2s ease;
  }
  .shop {
    margin-left: auto;
    margin-right: 1rem;
    background-color: transparent;
    &:hover{
      background-color: transparent;
    }
    & svg {
      width: 24px;
      height: 24px;
    }
    &:active {
      background-color: #b0b0b065;
    }
  }

  .lateral-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    padding: 2rem;
    padding-top: 1.5rem;
    z-index: 100;
    width: 100%;
    height: 100dvh;
    background-color: #fcf5ed;
    top: 0;
    right: 0;
    font-size: 1.5rem;
    transition: all 0.3s ease-in-out;
    transform: translateX(100%);
  }
  .open {
    transform: translateX(0%);
  }
  .header-menu {
    height: 15%;
    font-weight: 600;
  }
  .nav-movil {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: auto;
    margin-left: 0.5rem;
  }
  .link {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 1rem;
    font-size: 1.5rem;
    
    user-select: none;
    & .icon-container {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #d3c3b1;
      padding: 0.5rem;
      border-radius: 0.7rem;
      color: #3a3a3a;
    }
    & p {
      margin-top: 0.3rem;
    }
    &:hover{
      color: #3a3a3a;
    }
    &:active{
      color: #d8bb9b;
    }
  }
  .link.router-link-active .icon-container {
    background-color: #f05b3a;
    color: #fcf5ed;
  }
  .link.router-link-active:active p {
    color: #f05b3a;
  }

  .footer-menu {
    display: flex;
    width: 100%;
    border-top: 1px solid #d8bb9b;
    padding-top: 2rem;
    justify-content: start;
  }
  .perfil-container {
    display: flex;
    margin-left: 0.5rem;
    font-weight: 500;
    width: 100%;
    color: #3a3a3a;
    align-items: center;
    gap: 1rem;
    user-select: none;
    &:active p {
      color: #d8bb9b;
    }
  }
  .perfil-icon-movil {
    display: flex;
    background-color: #d3c3b1;
    border-radius: 0.6rem;
    align-items: center;
    padding: 0.5rem;
    color: #3a3a3a;
    & svg {
      width: 24px;
      height: 24px;
    }
  }
}

</style>
