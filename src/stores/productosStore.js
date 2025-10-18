import { ref } from "vue";
import { defineStore } from "pinia";
import masaClasico from "@/assets/pan_masa.webp";
import masaIntegral from "@/assets/masa_integral.webp";
import masaCenteno from "@/assets/masa_centeno.webp";
import masaEspelta from "@/assets/masa_espelta.webp";
import masaMulticereal from "@/assets/masa_multicereal.webp";
import bagClasico from "@/assets/pan_baguette.webp";
import bagIntegral from "@/assets/baguette_integral.webp";
import bagMulticereal from "@/assets/baguette_multicereal.webp";
import bagAceitunas from "@/assets/baguette_aceitunas.webp";
import bagQueso from "@/assets/baguette_queso.webp";
import multiClasico from "@/assets/multi_clasico.webp";
import multiAvena from "@/assets/multi_avena.webp";
import multiNueces from "@/assets/multi_nueces.webp";
import multiChia from "@/assets/multi_chia.webp";
import multiIntegral from "@/assets/multi_integral.webp";

export const useProductosStore = defineStore("productos", () => {
  const productos = ref([
    {
      id: 1,
      nombre: "Pan Clásico de Eucalipto",
      precio: 3.0,
      img: masaClasico,
      tipo: "Sourdough",
      descripcion:
        "Pan artesanal con ligero aroma a eucalipto, textura crujiente y miga suave especial para acompañar desayunos y meriendas.",
    },
    {
      id: 2,
      nombre: "Pan de Sourdough Integral",
      precio: 2.5,
      img: masaIntegral,
      tipo: "Sourdough",
      descripcion:
        "Elaborado con harina integral, ofrece sabor profundo, corteza firme y alto contenido en fibra para una opción saludable.",
    },
    {
      id: 3,
      nombre: "Pan de Sourdough de Centeno",
      precio: 3.5,
      img: masaCenteno,
      tipo: "Sourdough",
      descripcion:
        "Destaca por su sabor intenso y ligeramente ácido, perfecto para quienes buscan un pan tradicional y nutritivo.",
    },
    {
      id: 4,
      nombre: "Pan de Sourdough de Espelta",
      precio: 3.5,
      img: masaEspelta,
      tipo: "Sourdough",
      descripcion:
        "Hecho con espelta ancestral, este pan tiene aroma suave y textura ligera, ideal para personas con sensibilidad al trigo convencional.",
    },
    {
      id: 5,
      nombre: "Pan de Sourdough Multicereal",
      precio: 4.0,
      img: masaMulticereal,
      tipo: "Sourdough",
      descripcion:
        "Combinación de semillas y cereales, aporta sabor complejo y nutrientes adicionales para una dieta equilibrada.",
    },

    // Baguette
    {
      id: 6,
      nombre: "Baguette Clasico",
      precio: 5.0,
      img: bagClasico,
      tipo: "Baguette",
      descripcion:
        "Baguette francesa, corteza dorada y crujiente, miga aireada. Ideal para bocadillos y acompañar platos gourmet.",
    },
    {
      id: 7,
      nombre: "Baguette Integral",
      precio: 4.0,
      img: bagIntegral,
      tipo: "Baguette",
      descripcion:
        "Versión integral del clásico, perfecta para quienes buscan sabor tradicional con beneficios de granos enteros.",
    },
    {
      id: 8,
      nombre: "Baguette Multicereal",
      precio: 5.5,
      img: bagMulticereal,
      tipo: "Baguette",
      descripcion:
        "Fusiona semillas y cereales, textura crujiente y matices de sabor que la hacen perfecta para cualquier comida.",
    },
    {
      id: 9,
      nombre: "Baguette de Eucalipto y Aceitunas",
      precio: 6.0,
      img: bagAceitunas,
      tipo: "Baguette",
      descripcion:
        "Mezcla única de aceitunas verdes y aroma de eucalipto, pensada para paladares exigentes y cenas especiales.",
    },
    {
      id: 10,
      nombre: "Baguette de Eucalipto y Queso",
      precio: 5.5,
      img: bagQueso,
      tipo: "Baguette",
      descripcion:
        "Baguette rellena con trozos de queso y toque natural de eucalipto. Combina a la perfección sabor y suavidad.",
    },

    // Multigrano
    {
      id: 11,
      nombre: "Multigrano Clasico de Eucalipto",
      precio: 4.5,
      img: multiClasico,
      tipo: "Multigrano",
      descripcion:
        "Pan multigrano con eucalipto, crujiente y nutritivo, especial para quienes buscan energía y sabor en desayuno.",
    },
    {
      id: 12,
      nombre: "Multigrano con Eucalipto y Avena",
      precio: 5.5,
      img: multiAvena,
      tipo: "Multigrano",
      descripcion:
        "Combina suavidad de avena con aroma fresco de eucalipto, aportando fibra y ligereza en cada bocado.",
    },
    {
      id: 13,
      nombre: "Multigrano con Nueces y Pasas",
      precio: 5.0,
      img: multiNueces,
      tipo: "Multigrano",
      descripcion:
        "Su miga integra nueces crocantes y dulzor de pasas, excelente como snack o acompañante en platos principales.",
    },
    {
      id: 14,
      nombre: "Multigrano de Chia y Eucalipto",
      precio: 5.0,
      img: multiChia,
      tipo: "Multigrano",
      descripcion:
        "Pan enriquecido con semillas de chia y aroma a eucalipto, alto en omega 3 ideal para alimentación equilibrada.",
    },
    {
      id: 15,
      nombre: "Multigrano de Eucalipto Integral",
      precio: 4.0,
      img: multiIntegral,
      tipo: "Multigrano",
      descripcion:
        "Multigrano integral, ligero y saludable, perfecto para quienes prefieren opciones ricas en fibra y frescura.",
    },
  ]);

  function getName(name) {
    return productos.value.find((producto) => producto.nombre === name);
  }

  const carrito = ref([]);
  const pedidos = ref([])
const isProduct = ref(false)
function añadirPedidos() {
  pedidos.value.push(carrito.value)
  carrito.value = []
}
  return {
    productos,
    getName,
    carrito,
   isProduct,
   pedidos,
   añadirPedidos
  };
  
},{
  persist: true
});
