<template>
  <div class="root">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const text = ref('');

let intervalId: number;

const texts = [
  '建设中',
  '工作辅助面板',
  '时间管理',
  '任务管理',
  '日志管理',
];

onMounted(() => {
  clearInterval(intervalId);
  updateText();
  intervalId = setInterval(updateText, 5000);
});

var index = 0;
function updateText() {
  text.value = texts[index++];
  index %= texts.length;
}
</script>

<style scoped lang="scss">
.root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
  font-size: 2rem;
  text-align: center;
}
</style>