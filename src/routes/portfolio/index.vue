<script setup lang="ts">
definePage({
    name: 'Portfolio'
})

import { useStoryblokApi } from '@storyblok/vue';
import { useWindowSize } from '@vueuse/core';
import { computed } from 'vue';

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get(
    "cdn/stories/579076527",
    { version: "draft" } 
);

const images = computed(() => data.story.content.body[0].images)

const { width } = useWindowSize()
const colWidth = computed(() =>{
    if(width.value > 1536) {
        return ((width.value - 256) - 48) / 4
    } else if(width.value > 1024){
        return ((width.value - 96) - 32) / 3
    } else if (width.value > 768){
        return ((width.value - 64) - 16) / 2
    }else{
        return (width.value - 64)
    }
})

</script>

<template>
    <Suspense>
        <masonry-wall :items="images" :gap="16" :column-width="colWidth" class="pt-32 xl:px-32 lg:px-12 px-8">
            <template #default="{ item }">
                <img :src="`${item.filename}/m/704x0`" class="rounded-xl" :class="`w-[${colWidth}]`" />
            </template>
        </masonry-wall>
    </Suspense>
</template>


