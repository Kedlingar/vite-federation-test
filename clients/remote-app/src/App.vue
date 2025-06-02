<script setup lang="ts">
import { NavigationMenu } from 'libs';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const availableRoutes = computed(() => {
  return router.getRoutes().filter((route) => !route.meta?.isHide)
})
</script>

<template>
  <div class="remote-app">
    <NavigationMenu :routes="availableRoutes" />
    <router-view />
  </div>
</template>

<style scoped lang="css">
.remote-app {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  overflow: auto;
}
</style>
