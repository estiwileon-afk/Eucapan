<script setup>

import PerfilComponent from '@/components/PerfilComponent.vue';


</script>
<template>
  <section class="login">
    <PerfilComponent></PerfilComponent>

    
  </section>
</template>
<style scoped>
    .login{
       
        min-height: calc(100svh - 4rem);
        width: 100%;
        padding: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3rem;
    }
    @media(width < 768px){
        .login{
           padding: 2rem 1rem;
        
        }
    }
</style>
