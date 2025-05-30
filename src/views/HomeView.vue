<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const count = ref(0)
</script>

<template>
  <main>
    <h1 class="text-indigo-500">{{ t('common.message.hello') }}</h1>
    <p class="text-2xl text-green-500">{{ t('common.message.hello') }}</p>
    <hr />
    <button class="btn" @click="count++">{{ t('common.button.clickMe') }}</button>
  </main>
</template>

<style scoped></style>
