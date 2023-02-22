<template>
  <el-container class="root">
    <el-aside width="260px">
      <el-scrollbar>
        <div>
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
import Time from "../gadgets/Time.vue";
import Text from "../gadgets/Text.vue";
</script>

<style scoped lang="scss">
.root {
  .el-card {
    margin: 0.5rem auto;
    width: 240px;
  }
}
</style>
