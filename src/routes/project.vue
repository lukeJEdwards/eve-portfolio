<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { PortableText } from '@portabletext/vue';
import { useAssetsStore } from '@/store/useAssetsStore';
import { useImageBuilder } from '@/composables/useImageBuilder';


const { get_project } = useAssetsStore()
const route = useRoute()

const project = computed(() => get_project(route.params.slug))

</script>

<template>
    <div class="flex flex-col items-center justify-center pt-32">
        <h1 class="text-2xl font-bold text-white mb-8">
            {{ project.title }}
        </h1>
        <div class="w-5/6 text-center">
            <PortableText :value="project.content" />
        </div>
        <ul class="flex flex-col gap-4 py-8 items-center">
            <li v-for="image in project.project_assets" class="rounded w-1/4">
                <img :src="useImageBuilder(image.asset)" />
            </li>
        </ul>
    </div>
</template>
