<script setup lang="ts">
import desktop from "./Navigation/desktop.vue";
import mobile from "./Navigation/mobile.vue";

import { UseWindowSize } from '@vueuse/components'
</script>


<template>
    <UseWindowSize v-slot="{ width }">
        <desktop v-if="width > 768" />
        <mobile v-else />
    </UseWindowSize>
</template>