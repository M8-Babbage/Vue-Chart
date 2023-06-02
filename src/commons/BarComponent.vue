<template>
  <Bar :id="chartId" :options="chartOptions" :data="chartData" />
</template>
<script setup>
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { toRefs } from 'vue';
import { Bar } from 'vue-chartjs';

// Configurar las gráficas
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


// Definición de las propiedades
const props = defineProps({
  chartId: {
    type: String,
    required: true
  },
  chartOptions: {
    type: Object,
    required: true
  },
  chartData: {
    type: Object,
    required: true
  }
})

// Generar propiedades reactivas
const { chartId, chartOptions, chartData } = toRefs(props)

</script>
<style scoped></style>