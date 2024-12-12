<script setup lang="ts">
import { useAssetsStore } from '@/store/useAssetsStore';
import { useImageBuilder } from '@/composables/useImageBuilder';

import { storeToRefs } from 'pinia';

import { useWindowSize } from '@vueuse/core';
import { computed } from 'vue';



const { state: images } = storeToRefs(useAssetsStore())
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
    <masonry-wall :items="images" :gap="16" :column-width="colWidth" class="pt-32 xl:px-32 lg:px-12 px-8 pb-8">
        <template #default="{ item }">
            <div v-if="item._type == 'portfolio_asset'" class="relative hover:*:opacity-100">
                <img :src="useImageBuilder(item.asset?.image?.asset, 707)" class="rounded-xl" :class="`w-[${colWidth}]`" />
                <div class="
                    absolute flex justify-center 
                    items-center top-0 left-0 bg-[#F472B699]
                    w-full h-full rounded-xl text-white opacity-0
                    ">
                    <p>
                        {{ item.name }}
                    </p>
                </div>
            </div>
            <RouterLink v-else :to="`/project/${item.slug?.current}`">
                <div class="relative hover:*:opacity-100">
                    <img :src="useImageBuilder(item.thumbnail?.asset, 707)" class="rounded-xl" :class="`w-[${colWidth}]`" />
                    <div class="
                    absolute flex justify-center 
                    items-center top-0 left-0 bg-[#F472B699]
                    w-full h-full rounded-xl text-white opacity-0
                    ">
                        <p>
                            {{ item.title }}
                        </p>
                    </div>
                </div>
            </RouterLink>
        </template>
    </masonry-wall>
</template>
