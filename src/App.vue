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

// Täidetuse protsent paremasse "kuu" dialõõssi.
let pct = computed(() =>
  items.value.length ? Math.round(doneItems.value.length / items.value.length * 100) : 0,
);

let today = new Date().toLocaleDateString('et-EE', {
  weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
});
</script>

<template>
    <main class="card">
        <div class="band"><div class="rule"><div class="vellum">
            <span class="rosette a"></span><span class="rosette b"></span>
            <span class="rosette c"></span><span class="rosette d"></span>

            <div class="flourish"><i></i></div>
            <div class="ribbon"><h1>Register of Duties</h1></div>
            <p class="date">{{ today }}</p>

            <div class="grid">
                <div class="margin-l"><span>Memento · Agenda</span></div>

                <div>
                    <ItemList :items="allItems" title="All items"></ItemList>
                    <ItemList :items="doneItems" title="Done items"></ItemList>
                    <ItemList :items="toDoItems" title="ToDo items"></ItemList>
                </div>

                <aside class="margin-r">
                    <div class="dial" :style="{ '--pct': pct }"><b>{{ pct }}</b></div>
                    <small>duties<br>fulfilled</small>
                    <div class="fleuron"></div>
                </aside>
            </div>

            <form class="inscribe" @submit.prevent="add">
                <input v-model="message" placeholder="Add item" aria-label="Add item" autocomplete="off">
                <div class="select">
                    <select v-model="importance" aria-label="Olulisus">
                        <option v-for="(info, key) in IMPORTANCE" :key="key" :value="key">
                            {{ info.label }}
                        </option>
                    </select>
                </div>
                <button type="submit">Add</button>
            </form>

            <p class="colophon">Penned with care &amp; sealed in wax</p>
        </div></div></div>
    </main>
</template>

<style></style>
