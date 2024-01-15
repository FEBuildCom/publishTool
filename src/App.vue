<script setup lang="ts">
import {onMounted} from "vue";
import {useRoute} from "vue-router";
import {appWindow} from "@tauri-apps/api/window";

interface Props {
  name: String;
}

defineProps<Props>()
const route = useRoute()

onMounted(async () => {
  console.log("当前路由：", route.name, route.fullPath)
  // 为了正确地调整新建窗体的位置，需要计算出系统缩放比例
  if (appWindow.label === "main") {
    const size = await appWindow.innerSize();
    console.log(size);
  }
})

</script>

<template>
  <router-view></router-view>
</template>

<style scoped>

</style>
