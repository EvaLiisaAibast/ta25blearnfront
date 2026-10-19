<script setup>
import { computed, ref } from 'vue';
import ItemList from './ItemList.vue';
import { IMPORTANCE, DEFAULT_IMPORTANCE, sortByImportance } from './importance.js';

let message = ref('');
let importance = ref(DEFAULT_IMPORTANCE);
let i = 1;
let items = ref([
    {id: i++, text: 'Piim', isDone: false, importance: 'high'},
    {id: i++, text: 'Viin', isDone: true, importance: 'low'},
    {id: i++, text: 'Õlu', isDone: false, importance: 'low'},
    {id: i++, text: 'Sai', isDone: true, importance: 'medium'},
    {id: i++, text: 'Ravimid', isDone: false, importance: 'high'},
    {id: i++, text: 'Šampoon', isDone: false, importance: 'medium'},
]);

function add(){
  if(message.value.trim() !== '') {
    items.value.push({
      id: i++,
      text: message.value.trim(),
      isDone: false,
      importance: importance.value,
    });
  }
  message.value = '';
  importance.value = DEFAULT_IMPORTANCE;
}

// Kõik kolm nimekirja on olulisuse järgi sorteeritud: kõige olulisem ees.
let allItems = computed(() => sortByImportance(items.value));
let doneItems = computed(() => sortByImportance(items.value.filter(item => item.isDone)));
let toDoItems = computed(() => sortByImportance(items.value.filter(item => !item.isDone)));
</script>

<template>
    <div class="container content mt-2">
        <div class="field has-addons">
            <div class="control is-expanded">
                <input @keydown.enter="add" v-model="message" class="input" type="text" placeholder="Add item">
            </div>
            <div class="control">
                <div class="select">
                    <select v-model="importance" aria-label="Olulisus">
                        <option v-for="(info, key) in IMPORTANCE" :key="key" :value="key">
                            {{ info.label }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="control">
                <button @click="add" class="button is-info">
                    Add
                </button>
            </div>
        </div>

        <ItemList :items="allItems" title="All items"></ItemList>
        <ItemList :items="doneItems" title="Done items"></ItemList>
        <ItemList :items="toDoItems" title="ToDo items"></ItemList>
    </div>
</template>

<style></style>
