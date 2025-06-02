<script setup lang="ts">
import { useId } from 'vue';
import { type RouteRecord } from 'vue-router';

defineProps<{
    routes: RouteRecord[],
}>()

const unuqieId = useId()
</script>

<template>
    <div class="navigation-menu" :id="unuqieId">
        <RouterLink 
            activeClass="active-route"
            exactActiveClass="exact-active-route" 
            v-for="(route, i) in routes"
            :key="`${route.path}${i}`" 
            :to="route.path"
        >
            <span class="route">
                {{ route.meta?.title || "Unknown" }}
            </span>
        </RouterLink>
    </div>
</template>

<style scoped lang="css">
.navigation-menu {
    max-width: 250px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    width: 100%;
    border-right: 1px solid white;
    padding: 1rem;
}

.active-route {
    color: green;
}

.navigation-menu a {
    text-decoration: none;
    color: white;
}

.navigation-menu a.active-route {
    color: rgb(5, 131, 32);
}

.navigation-menu a.exact-active-route {
    color: rgb(10, 240, 10);
}

</style>