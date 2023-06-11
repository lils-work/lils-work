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
import { ElTabs, ElTabPane, ElTable, ElTableColumn } from 'element-plus';
import moment from 'moment';
import 'moment/dist/locale/zh-cn';
import { ApiService } from '../services/ApiService';
import { PlanCycle } from '../models/PlanCycle';

const tasks = ref<{ id: number, title: string, dueTo: Date, isCompleted: boolean, isCancel: boolean }[]>([]);
const taskplans = ref<{ id: number, title: string, cycle: PlanCycle }[]>([]);

onMounted(async () => {
  var r = await fetch(`${ApiService.url}/task`);
  var t = await r.json();

  tasks.value = t;

  var pr = await fetch(`${ApiService.url}/taskplan`);
  var pt = await pr.json();

  taskplans.value = pt;
});

function formatDueDate(date: Date): string {
  if (date != null) {
    moment.locale('zh-cn');
    return moment(date).calendar();
  }

  return "long term";
}

</script>

<style lang="scss" scoped></style>