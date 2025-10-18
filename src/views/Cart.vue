<script setup>
import CartComponent from '@/components/CartComponent.vue';
import CartVacio from '@/components/CartVacio.vue'
import { useProductosStore } from '@/stores/productosStore';
import { storeToRefs } from 'pinia';

const {carrito } = storeToRefs(useProductosStore())
</script>
<template>
    <section class="carrito">
        <CartVacio v-if="carrito.length < 1"></CartVacio>
        <CartComponent v-else></CartComponent>
    </section>
</template>
<style scoped>
.carrito{
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 3rem;
    min-height: calc(100svh - 4rem);
}
@media(width< 768px){
    .carrito{
        padding: 2rem 1rem;
    }
}
</style>