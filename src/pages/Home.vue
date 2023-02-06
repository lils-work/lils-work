<template>
  <div class="root">
    <div class="title">
      <img src="../assets/logo.png" alt="lil's" style="width: 6rem" class="w-24">
      <span class="text-xs font-sans">Work</span>
    </div>
    <el-calendar />
    <div>
      <!-- TODO: task.state 的变动无法更新到 Check 状态 -->
      <el-checkbox v-for="task in tasks" :label="task.title" :checked="task.state == TaskState.Done"></el-checkbox>
    </div>
    <div style="display: flex; justify-content: center;">
      <el-link href="https://beian.miit.gov.cn/">鄂ICP备20001882号-2</el-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElCalendar, ElLink } from 'element-plus';
import { ref, onMounted } from 'vue';
import { TaskState } from '../models/TaskState';

const tasks = ref<{ id: number, title: string, state: TaskState }[]>([]);

onMounted(async () => {
  var r = await fetch('http://localhost:5286/task');
  var t = await r.json();

  tasks.value = t;
});
</script>

<style scoped lang="scss">
.root {
  .title {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
  }
}
</style>
