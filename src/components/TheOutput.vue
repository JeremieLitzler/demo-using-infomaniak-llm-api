<template>
  <section>
    <h2>The assistant reply</h2>
    <pre>{{ result ?? 'Nothing yet' }}</pre>
  </section>
</template>

<script setup lang="ts">
import type LlmResult from '../types/LlmResult';

interface TheOutputProps {
  result?: LlmResult | null;
}

defineProps<TheOutputProps>();
</script>

<style scoped></style>
