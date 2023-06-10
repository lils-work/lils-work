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
      <el-header>

      </el-header>
      <el-main>

      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ElContainer, ElAside, ElScrollbar, ElHeader, ElMain, ElLink, ElCard } from 'element-plus';
import Task from "../gadgets/Task.vue";
import Time from "../gadgets/Time.vue";
import Text from "../gadgets/Text.vue";
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
