<script setup lang="ts">
const posts = [
    { id: 1, title: "test1" },
    { id: 2, title: "test2" },
    { id: 3, title: "test3" }
]
</script>

<template>
    <div class="user-posts">
        <div v-for="post in posts" :key="post.id">
            {{ post.title }}
        </div>
    </div>
</template>

<style lang="css" scoped></style>