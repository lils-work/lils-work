<template>
  <div class="root">
    <div v-for="task of tasks">
      <el-space style="margin: 0.3rem 0;">
        <el-checkbox :checked="task.isCompleted" />
        <span style="margin-left: 0.5rem;">{{ task.title }}</span>
      </el-space>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { ElCheckbox, ElSpace } from 'element-plus';
import { tr } from 'element-plus/es/locale';

const tasks = ref<any[]>();

onMounted(() => {
  tasks.value = [
    { title: '随手：每个任务放一行', isCompleted: true },
    { title: '随手：手机上应该显示满屏宽度', isCompleted: true },
    { title: '随手：文字较多时应该换行，比如这行文字在小屏设备上很不友好', isCompleted: true },
    { title: '随手：应该设置最大行数，超过时显示滚动条', isCompleted: true },
    { title: '随手：将已完成任务放在后面', isCompleted: true },
    { title: '随手：像 cn.bing.com 那样，屏蔽某些浏览器的下拉刷新机制', isCompleted: false },
    { title: '随手任务添加标记，表示可以快速完成', isCompleted: false },
    { title: '周期任务添加标记，表示将周期性地生成', isCompleted: false },
    { title: '从服务获取任务', isCompleted: false },
    { title: '更新任务状态', isCompleted: false },
    { title: '长按拖拽调整顺序，参考 https://hcg1023.github.io/vue3-dnd/', isCompleted: false },
    { title: '登录', isCompleted: false },
    { title: '添加任务', isCompleted: false },
    { title: '周期性任务的自动创建', isCompleted: false },
    { title: '任务统计（在日历中显示每天任务的完成情况）', isCompleted: false },
    { title: '切换到 HTTPS', isCompleted: false },
    { title: '记录任务完成时间', isCompleted: false },
    { title: '说明：这里管理的是零散任务和周期性任务', isCompleted: false },
    { title: '说明：具有目的性的计划任务，应该由更专业的工具来管理', isCompleted: false },
    { title: '本任务的主条目位于 Trello： https://trello.com/c/EW9LAB3A', isCompleted: false },
    { title: '将 Trello 中指定列表的任务也列在这里', isCompleted: false },
  ]

  tasks.value.sort((a, b) => {
    var ac = a.isCompleted ? 1 : 0;
    var bc = b.isCompleted ? 1 : 0;
    return ac - bc;
  });
});
</script>

<style scoped lang="scss">
.root {
  font-family: Inter, Avenir, Helvetica, Arial, sans-serif;

  .el-checkbox {
    word-wrap: normal;
  }
}
</style>