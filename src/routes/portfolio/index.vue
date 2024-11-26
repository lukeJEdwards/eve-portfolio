<script setup lang="ts">
definePage({
    name: 'Portfolio'
})

import { useAssetsStore } from '@/store/useAssetsStore';
import { useRoute } from "vue-router";
import { useWindowSize } from '@vueuse/core';
import { computed, onBeforeMount } from 'vue';


const { initialize, categories } = useAssetsStore()
const route = useRoute()
console.log(route.query)


onBeforeMount(async () => {
    await initialize();
})

const images = computed(() => {
    if(route.query?.category){
        return categories[route.query['category'].toString()]
    }else{
        return Object.values(categories).reduce((prev, next) => prev.concat(next), [])
    }
})

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
                <img :src="`${item.filename}/m/704x0`" class="rounded-xl hover:scale-110" :class="`w-[${colWidth}]`" />
            </template>
        </masonry-wall>
    </Suspense>
</template>


