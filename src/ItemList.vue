<script setup>
import { importanceInfo } from './importance.js';

defineProps(['items', 'title']);

function info(item) {
    return importanceInfo(item.importance);
}
</script>
<template>
    <h1>
        <span class="tape" aria-hidden="true"></span>
        {{ title }}
    </h1>
    <ul>
        <span class="pin pin-l" aria-hidden="true"></span>
        <span class="pin pin-r" aria-hidden="true"></span>
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
