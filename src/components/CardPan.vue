<script setup>
const props = defineProps({
  img: String,
  name: String,
  price: Number,
  type: String,
});


</script>
<template>
  <div class="card">
    <p class="type">{{ type }}</p>
    <div class="imagen-container">
      <img loading="lazy" class="imagen" :src="img" :alt="name" />
    </div>

    <div class="text-container">
      <p class="title">{{ name }}</p>
      <span class="price">S/{{ price.toPrecision(3).replace(".", ",") }}</span>
      <RouterLink :to="{ name: 'Details', params: { name: props.name } }" class="boton">
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
          class="lucide lucide-store-icon lucide-store"
        >
          <path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5" />
          <path
            d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"
          />
          <path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05" />
        </svg>
        Ver Producto</RouterLink>
    </div>
  </div>
</template>
<style scoped>
.card {
  width: 100%;
  min-height: max-content;
  height: 13rem;
  display: flex;
  flex-direction: column;
  border: 2px solid #3a3a3a;
  border-radius: 0.7rem 0.7rem 0.7rem 0.7rem;
  background-color: #3a3a3a;
  position: relative;
  animation: fade-in both ease;
  animation-timeline: view();
  animation-range: entry -20% cover 20%;
}
@keyframes fade-in {
  0% {
    transform: translateY(20rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0rem);
    opacity: 1;
  }
}

.type {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 10;
  border-radius: 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  background-color: #a08a6985;
  color: white;

  padding: 0.3rem 0.8rem;
}
.imagen-container {
  border-radius: 0.7rem 0.7rem 0 0;
  width: 100%;
  position: relative;
  height: 14rem;
}
.imagen {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.7rem 0.7rem 0 0;
  transition: all 0.3s ease-in-out;
}
.text-container {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  height: 100%;
  padding: 1.2rem;
  justify-content: space-between;
  background-color: #3a3a3a;
  color: #fcf5ed;
  border-radius: 0 0 0.7rem 0.7rem;
}
.title {
  font-size: 1.4rem;
  font-weight: 700;
}
.price {
  font-size: 1.9rem;
  font-weight: 700;
  margin-top: auto;
}
.boton {
  color: #fcf5ed;
  background-color: #ff6543;
  padding: 0.9rem 1rem;
  text-align: center;
  border-radius: 0.6rem;
  font-weight: 700;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  user-select: none;
  &:hover {
    background-color: #d8bb9b;
    transform: translateY(-3px);
    color: #3a3a3a;
  }
}
@media (width <768px) {
  .card{
    animation: fade-in both ease;
  animation-timeline: view();
  animation-range: entry -20% cover 20%;
  }
  
  @keyframes fade-in {
  0% {
    transform: translateY(20rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0rem);
    opacity: 1;
  }
}
  .boton {
    color: #fcf5ed;
    background-color: #ff6543;
    padding: 0.9rem 1rem;
    text-align: center;
    border-radius: 0.6rem;
    font-weight: 700;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: all 0.3s ease;
    &:hover {
      background-color: #ff6543;
      transform: translateY(0);
      color: #fcf5ed;
    }
    &:active {
      transform: scale(1.15);
    }
  }
}
</style>
