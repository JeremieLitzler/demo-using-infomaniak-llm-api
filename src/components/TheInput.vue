<template>
  <section>
    <h2>What do you need?</h2>
    <p>
      This demonstrates the use of Infomaniak AI that is based on the OpenAI
      API, but with privacy in mind.
      <a
        href="https://www.infomaniak.com/en/hosting/llm-api"
        target="_blank"
        rel="noopener noreferrer"
        >Read from them now!</a
      >
    </p>
    <form @submit.prevent="generate">
      <label>
        <textarea
          name="prompt"
          id="prompt"
          cols="30"
          rows="10"
          v-model="prompt"
          placeholder="Your prompt goes here. Check out limitations in the Infomaniak docs"
        ></textarea>
      </label>
      <pre v-if="error">{{ error }}</pre>
      <button>Ask the assistant</button>
    </form>
    <p>
      <a
        href="https://developer.infomaniak.com/docs/api/post/1/llm/%7Bproduct_id%7D"
        target="_blank"
        rel="noopener noreferrer"
        >View the documentation</a
      >
    </p>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type LlmResult from '../types/LlmResult';

const prompt = ref('Who is president of France?');
const error = ref<string | null>(null);
const emit = defineEmits<{ (event: '@capture', entry: LlmResult): void }>();

const generate = async () => {
  const jsonData = JSON.stringify({
    messages: [{ content: prompt.value, role: 'user' }],
  });

  const options: RequestInit = {
    method: 'POST', // Set request method to POST
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_LLM_API_KEY}`, // Replace with your authorization token
      'Content-Type': 'application/json', // Set content type to JSON
    },
    body: jsonData, // Send the JSON data in the body
  };
  const llmApi = `/api-llm`;
  const response = await fetch(llmApi, options);

  if (!response.ok) {
    error.value = `API request failed with status ${response.status}`;
    throw new Error(error.value);
  }

  const responseJson: LlmResult = await response.json();
  emit('@capture', responseJson);
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-items: center;
}
textarea {
  width: 100%;
}
</style>
