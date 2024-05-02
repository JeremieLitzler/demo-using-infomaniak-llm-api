<script setup lang="ts">
import { ref } from 'vue';
import TheInput from './components/TheInput.vue';
import TheOutput from './components/TheOutput.vue';
import type LlmResult from './types/LlmResult';

const result = ref<LlmResult | null>(null);
const fillResult = (data: LlmResult) => (result.value = data);
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <suspense>
    <template #default>
      <TheInput @@capture="fillResult" />
      <TheOutput :result />
    </template>
    <template #fallback>
      <section class="loading">Loading...</section>
    </template>
  </suspense>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
