<template>
  <div class="root">
    {{ time }}
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import moment from 'moment';

const time = ref('00:00:00');

let intervalId: number;

onMounted(() =>{
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    time.value = moment(new Date()).format('HH:mm:ss');
  }, 1000);
});
</script>

<style scoped lang="scss">
.root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 3.2rem;
  text-align: center;
}
</style>