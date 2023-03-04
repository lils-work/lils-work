<template>
  <div class="root">
    <el-checkbox v-for="task of tasks">{{ task.title }}</el-checkbox>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ElCheckbox } from 'element-plus';

const tasks = ref<any[]>();

onMounted(() => {
  tasks.value = [
    { title: '短任务', isCompleted: false },
    { title: '任务 2', isCompleted: false },
    { title: '学习任务', isCompleted: false },
    { title: '日常任务', isCompleted: false },
    { title: '记录生活', isCompleted: false },
    { title: '复杂且耗时较长的任务', isCompleted: false },
    { title: '任务', isCompleted: false },
    { title: '任务', isCompleted: false },
    { title: '任务', isCompleted: false },
    { title: '任务', isCompleted: false },
    { title: '任务', isCompleted: false },
    { title: '任务', isCompleted: false },
    { title: '任务', isCompleted: false },
    { title: '任务', isCompleted: false },
    { title: '任务', isCompleted: false },
    { title: '任务', isCompleted: false },
  ]
});
</script>

<style scoped lang="scss">
.root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
}
</style>