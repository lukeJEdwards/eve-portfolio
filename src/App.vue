<script setup lang="ts">
import { RouterView } from 'vue-router'
import Nav from '@/components/nav.vue'
</script>

<template>
  <!-- <Nav/> -->
  <Suspense>
   <RouterView />
  </Suspense>
</template>
