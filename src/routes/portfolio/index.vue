<script setup lang="ts">
definePage({
    name: 'Portfolio'
})

import { useStoryblokApi } from '@storyblok/vue';
import { computed } from 'vue';

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get(
    "cdn/stories/579076527",
    { version: "draft" } 
);

const images = computed(() => data.story.content.body[0].images)
</script>

<template>
    <Suspense>
        <masonry-wall :items="images" :column-width="300" :gap="16" class="p-32">
            <template #default="{ item, index }">
                <img :src="`${item.filename}/m/300x0`" class="rounded-xl"/>
            </template>
        </masonry-wall>
    </Suspense>
</template>


