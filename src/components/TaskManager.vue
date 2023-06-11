<template>
  <el-tabs>
    <el-tab-pane label="任务">
      <el-table :data="tasks">
        <el-table-column prop="title" label="标题" width="180" />
        <el-table-column label="到期时间" width="180">
          <template #default="scope">
            {{ formatDueDate(scope.row.dueTo) }}
          </template>
        </el-table-column>
      </el-table>
      <el-input v-model="newTaskTitle" style="width: 20rem; margin-top: 2rem;">
        <template #append>
          <el-button :icon="Plus" @click="AddTask()" />
        </template>
      </el-input>
    </el-tab-pane>
    <el-tab-pane label="任务计划">
      <el-table :data="taskplans">
        <el-table-column prop="title" label="标题" width="180" />
        <el-table-column label="周期" width="180">
          <template #default="scope">
            {{ Object.values(PlanCycle).at(scope.row.cycle) }}
          </template>
        </el-table-column>
      </el-table>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { ElTabs, ElTabPane, ElTable, ElTableColumn, ElInput, ElButton, ElIcon } from 'element-plus';
import { Plus } from '@element-plus/icons-vue';
import moment from 'moment';
import 'moment/dist/locale/zh-cn';
import { ApiService } from '../services/ApiService';
import { PlanCycle } from '../models/PlanCycle';

const tasks = ref<{ id: number, title: string, dueTo: Date, isCompleted: boolean, isCancel: boolean }[]>([]);
const taskplans = ref<{ id: number, title: string, cycle: PlanCycle }[]>([]);
const newTaskTitle = ref<string>('');

onMounted(async () => {
  updateTasks();

  var pr = await fetch(`${ApiService.url}/taskplan`);
  var pt = await pr.json();

  taskplans.value = pt;
});

async function updateTasks() {
  var r = await fetch(`${ApiService.url}/task`);
  var t = await r.json();

  tasks.value = t;
}

function formatDueDate(date: Date): string {
  if (date != null) {
    moment.locale('zh-cn');
    return moment(date).calendar();
  }

  return "long term";
}

async function AddTask() {
  var r = await fetch(`${ApiService.url}/task`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify([{
      title: newTaskTitle.value
    }]),
  });
  if (r.status == 201) {
    updateTasks();
    newTaskTitle.value = '';
  }
}

</script>

<style lang="scss" scoped></style>