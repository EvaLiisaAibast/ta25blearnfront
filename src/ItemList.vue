<script setup>
import { importanceInfo } from './importance.js';

const props = defineProps(['items', 'title']);

function info(item) {
    return importanceInfo(item.importance);
}
</script>
<template>
    <section class="register">
        <div class="flourish"><i></i></div>
        <div class="ribbon"><h2>{{ title }}</h2></div>

        <ol>
            <li v-for="item in items" :key="item.id"
                :class="[info(item).rowClass, { done: item.isDone }]">
                <div class="body">
                    <span class="text">{{ item.text }}</span>
                    <span class="tag" :class="info(item).colorClass">
                        {{ info(item).label }}
                    </span>
                </div>
                <label class="seal">
                    <input type="checkbox" v-model="item.isDone" :aria-label="item.text">
                </label>
            </li>
            <li v-if="!items.length" class="empty">All is done. Rest well.</li>
        </ol>
    </section>
</template>
