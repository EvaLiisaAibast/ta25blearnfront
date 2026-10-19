<script setup>
import { importanceInfo } from './importance.js';

defineProps(['items', 'title']);

function info(item) {
    return importanceInfo(item.importance);
}
</script>
<template>
    <h1>{{ title }}</h1>
    <ul>
        <li v-for="item in items" :key="item.id"
            class="box mb-3"
            :class="info(item).rowClass">
            <span class="tag mr-2" :class="info(item).colorClass">
                {{ info(item).label }}
            </span>
            {{ item.text }}
            <input type="checkbox" v-model="item.isDone">
        </li>
    </ul>
</template>
