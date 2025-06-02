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
  <div class="host-app">
    <NavigationMenu :routes="availableRoutes" />
    <router-view />
  </div>
</template>

<style scoped>
.host-app {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  overflow: auto;
}
</style>
