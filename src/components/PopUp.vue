<script setup></script>
<template>
    <div class="popup">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-icon lucide-circle-check correcto"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
        <p class="text">¡Añadido al Carrito!</p>
    </div>
</template>
<style scoped>
.popup{
    
    display: flex;
    gap: .7rem;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
     align-items: center;
    background-color: white;
    border-radius: .7rem;
    color: #188814;
    box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.642);
    padding: .7rem 1rem;
}
.text{
    
    font-weight: 600;
    font-size: 1.5rem;
}

</style>