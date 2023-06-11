<template>
  <el-container class="root">
    <el-aside>
      <el-scrollbar>
        <div>
          <el-card>
            <el-scrollbar>
              <Task class="max-card-height"></Task>
            </el-scrollbar>
          </el-card>
          <el-card>
            <Time></Time>
          </el-card>
          <el-card>
            <Text></Text>
          </el-card>
        </div>
      </el-scrollbar>
    </el-aside>
    <el-container>
      <el-main>
        <TaskManager/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ElContainer, ElAside, ElScrollbar, ElHeader, ElMain, ElLink, ElCard } from 'element-plus';
import Task from "../gadgets/Task.vue";
import Time from "../gadgets/Time.vue";
import Text from "../gadgets/Text.vue";
import TaskManager from "../components/TaskManager.vue";
</script>

<style scoped lang="scss">
.root {
  .el-aside {
    width: 18rem;

    .el-card {
      margin: 1rem auto;
      width: 17rem;

      .max-card-height {
        max-height: 12rem;
      }
    }

    /* 出现滚动条时，去掉 card 的内边距，改为设置内容的外边距 */
    .el-card:has(.el-scrollbar) {
      --el-card-padding: 0px;

      .el-scrollbar {
        .el-scrollbar__view {

          // 在这里设置 margin 及 padding 均不起作用
          // 会出现横向滚动条，原因未知，即使在本级或子级设置宽度，仍不能解决该问题

          * {
            margin: 20px;
          }
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .root {
    .el-aside {
      width: 100%;

      .el-card {
        width: calc(100% - 0.5rem);
      }
    }
  }
}
</style>
