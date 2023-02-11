<template>
  <div class="root">
    <div class="title">
      <img src="../assets/logo.png" alt="lil's" style="width: 6rem" class="w-24">
      <span class="text-xs font-sans">Work</span>
    </div>
    <el-calendar />
    <div style="display: flex; justify-content: center;">
      <el-link href="https://beian.miit.gov.cn/">鄂ICP备20001882号-2</el-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElCalendar } from 'element-plus';
</script>

<style scoped lang="scss">
.root {
  .title {
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
  }
}
</style>
