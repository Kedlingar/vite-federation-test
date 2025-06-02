<script setup lang="ts">
import { ref, onMounted } from 'vue';

const loading = ref(true);
const error = ref<Error | null>(null);
const container = ref<HTMLElement | null>(null);

interface RemoteModule {
    mount: (el: HTMLElement) => void;
}

onMounted(async () => {
    if (!container.value) return;

    try {
        loading.value = true;
        error.value = null;

        const remoteModule = await import('remote_app/mount') as { default: RemoteModule };
        remoteModule.default.mount(container.value);

    } catch (err) {
        error.value = err instanceof Error ? err : new Error('Неизвестная ошибка');
    } finally {
        loading.value = false;
    }
});
</script>

<template>
  <div class="remote-app">
    <div class="remote-app-wrapper" ref="container"></div>
    <div v-if="loading" class="fill-space">Загрузка...</div>
    <div v-else-if="error" class="fill-space">Ошибка: {{ error.message }}</div>
  </div>
</template>

<style scoped>
.remote-app {
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* если контейнер пустой, высота 0 */
.remote-app-wrapper:empty {
  height: 0;
  overflow: hidden;
}

/* если не пустой — занимает всё */
.remote-app-wrapper {
  width: 100%;
  height: 100%;
  transition: height 0.3s ease;
  flex-shrink: 0; /* чтобы не сжимался */
}

/* лоадер и ошибка занимают всё остальное */
.fill-space {
  flex-grow: 1;
  display: flex;
  align-items: center;     /* вертикальное центрирование */
  justify-content: center; /* горизонтальное центрирование */
  text-align: center;      /* на всякий случай */
}
</style>