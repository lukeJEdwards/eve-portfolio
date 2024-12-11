<script setup lang="ts">
import desktop from "./Navigation/desktop.vue";
import mobile from "./Navigation/mobile.vue";

import { useWindowSize } from "@vueuse/core"

const { width } = useWindowSize()
</script>


<template>
    <desktop v-if="width > 768" />
    <mobile v-else />
</template>