<template>
  <div class="root">
    <el-row>
      <el-col :span="24 / cols">
        <div>
          <div v-for="task in tasks">
            <el-checkbox :id="task.title" v-model="task.isCompleted" @change="updateState(task)">
              {{ task.title }} | {{ task.dueTo }}
            </el-checkbox>
          </div>
        </div>
      </el-col>
      <el-col :span="24 / cols">
        <div>
          <div v-for="taskplan in taskplans">
            <span>{{ taskplan.title }} - {{ taskplan.cycle }}</span>
          </div>
          <div>
            <input v-model="newPlanTitle" />
            <button @click="addPlan(newPlanTitle)">Add</button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ElRow, ElCol, ElCheckbox } from 'element-plus';
import { ApiService } from '../services/ApiService';
import { PlanCycle } from '../models/PlanCycle';

const cols = ref(2);
const tasks = ref<{ id: number, title: string, dueTo:Date, isCompleted: boolean, isCancel: boolean }[]>([]);
const taskplans = ref<{ id: number, title: string, cycle: PlanCycle }[]>([]);
const newPlanTitle = ref('');

onMounted(async () => {
  var r = await fetch(`${ApiService.url}/task`);
  var t = await r.json();

  tasks.value = t;

  var pr = await fetch(`${ApiService.url}/taskplan`);
  var pt = await pr.json();

  taskplans.value = pt;
});

async function updateState(task: { id: number, title: string, dueTo:Date, isCompleted: boolean, isCancel: boolean }) {
  await fetch(`${ApiService.url}/task`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });
}

async function addPlan(newPlanTitle: string) {
  var r = await fetch(`${ApiService.url}/taskplan`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify([{
      title: newPlanTitle,
      cycle: 0,
    }]),
  });
  console.log(r.status);
  if (r.status == 201) {
    var pr = await fetch(`${ApiService.url}/taskplan`);
    var pt = await pr.json();

    taskplans.value = pt;
    newPlanTitle = '';
  }
}
</script>

<style scoped lang="scss">

</style>