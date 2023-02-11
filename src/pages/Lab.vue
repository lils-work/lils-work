<template>
  <div class="root">
    <div>
      <!-- task.state 的变动无法更新到 ElCheckBox.Check，因此使用了原生 CheckBox -->
      <div v-for="task in tasks">
        <input :id="task.title" type="checkbox" v-model="(task.state as any)" :true-value="TaskState.Done"
          :false-value="TaskState.Todo" @change="updateState(task)">
        <label :for="task.title">{{ task.title }}</label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { TaskState } from '../models/TaskState';

const tasks = ref<{ id: number, title: string, state: TaskState }[]>([]);

onMounted(async () => {
  var r = await fetch('http://api.lils.work/task');
  var t = await r.json();

  tasks.value = t;
});

async function updateState(task: { id: number, title: string, state: TaskState }) {
  await fetch('http://api.lils.work/task', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
}
</script>

<style scoped lang="scss">

</style>