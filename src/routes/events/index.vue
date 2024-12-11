<script setup lang="ts">
import { useImageBuilder } from '@/composables/useImageBuilder';
import { useSanityQuery } from '@/composables/useSanityQuery';
import type { Event } from '@/types/sanity.types';


const query = `*[
  _type=="event"
]`
const events = await useSanityQuery<Event[]>(query)

</script>


<template>
    <div class="px-32">
        <ul class="flex gap-8">
            <li v-for="event in events" class="w-[250px]">
                <RouterLink :to="`/events/${event.slug?.current}`">
                    <img :src="useImageBuilder(event)" class="rounded-xl" />
                </RouterLink>
            </li>
        </ul>
    </div>
</template>
