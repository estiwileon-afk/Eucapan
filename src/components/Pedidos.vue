<script setup>
const props = defineProps({
    img: String,
    name: String,
    cantidad: Number
})
</script>
<template>
  <div class="producto-container">
    <img class="imagen" :src="img" :alt="img" />

    <h2 class="title">{{ name }}</h2>

    <p class="cantidad"> {{ cantidad }} unidad/es </p>
  </div>
</template>
<style scoped>
.producto-container{
    display: flex;
   
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: max-content;
 border-block: 1px solid #d8bb9b;
    gap: 1rem;
    padding: 1rem;
    
}
.imagen{
    width: 8rem;
    border-radius: .6rem;
}
.title{
    font-size: 1.6rem;
    color: #3a3a3a;
}
.cantidad{
    font-size: 2rem;
    color: #d8bb9b;
    border: 2px solid #a08a69;
    border-radius: .6rem;
    padding: .7rem .5rem;
    text-align: center;
    font-weight: 700;
}
@media(width < 768px){
    .imagen{
        width: 100%;
    }
    .producto-container{
        flex-direction: column;
    }
    .cantidad{
        font-size: 1.2rem;
    }
}
</style>