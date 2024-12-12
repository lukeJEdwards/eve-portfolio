<script setup lang="ts">
import { useImageBuilder } from '@/composables/useImageBuilder';
import { useEventsStore } from '@/store/useEventsStore';
import { storeToRefs } from 'pinia';

const { state: events } = storeToRefs(useEventsStore())

</script>


<template>
    <div class="px-32">
        <ul class="flex gap-8">
            <li v-for="event in events" class="w-[250px]">
                <RouterLink :to="`/events/${event.slug?.current}`">
                    <img :src="useImageBuilder(event.thumbnail?.asset)" class="rounded-xl" />
                </RouterLink>
            </li>
        </ul>
    </div>
</template>
