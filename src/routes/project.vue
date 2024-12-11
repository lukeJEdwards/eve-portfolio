<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { PortableText } from '@portabletext/vue';

import { client } from "@/client";
import imageUrlBuilder from "@sanity/image-url";
import { useAssetsStore } from '@/store/useAssetsStore';
import { useWindowSize } from '@vueuse/core';

const builder = imageUrlBuilder(client);

const { get_project } = useAssetsStore()
const route = useRoute()

const project = computed(() => get_project(route.params.slug))

const { width } = useWindowSize()

const colWidth = computed(() => {
    if (width.value > 1536) {
        return ((width.value - 256) - 48) / 4
    } else if (width.value > 1024) {
        return ((width.value - 96) - 32) / 3
    } else if (width.value > 768) {
        return ((width.value - 64) - 16) / 2
    } else {
        return (width.value - 64)
    }
})
</script>

<template>
    <div class="flex flex-col items-center justify-center pt-32">
        <h1 class="text-2xl font-bold text-white mb-8">
            {{ project.title }}
        </h1>
        <div class="w-5/6">
            <PortableText :value="project.content" />
        </div>
        <ul class="flex flex-col gap-4 py-8 items-center">
            <li v-for="image in project.project_assets" class="rounded w-1/4">
                <img :src="builder.image(image.asset?._ref)" />
            </li>
        </ul>
    </div>
</template>
