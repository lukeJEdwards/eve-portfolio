<script setup lang="ts">
import { useEventsStore } from '@/store/useEventsStore';

import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { PortableText } from '@portabletext/vue';
import { useImageBuilder } from '@/composables/useImageBuilder';


const { get_event } = useEventsStore()
const route = useRoute()

const event = computed(() => get_event(route.params.slug))



</script>


<template>
    <div class="flex flex-col px-32 items-center">
        <ul class="flex gap-4 py-8 justify-center">
            <li v-for="image in event.project_assets" class="rounded max-w-[300px]">
                <img :src="useImageBuilder(image.asset)" />
            </li>
        </ul>
        <div class="flex justify-center w-[616px]">
            <PortableText :value="event.content" />
        </div>
    </div>
</template>
