<script setup lang="ts">
import { useAssetsStore } from '@/store/useAssetsStore';
import { useImageBuilder } from '@/composables/useImageBuilder';

import { storeToRefs } from 'pinia';

import { useWindowSize } from '@vueuse/core';
import { useRoute } from "vue-router";
import { computed } from 'vue';



const { state } = storeToRefs(useAssetsStore())
const { width } = useWindowSize()
const route = useRoute()

const images = computed(() => 
    route.params.category == 'all' 
    ? state.value 
    : state.value.filter(i => i.category == route.params.category)
)


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
    <masonry-wall :items="images" :gap="16" :column-width="colWidth" class="pt-32 xl:px-32 lg:px-12 px-8">
        <template #default="{ item }">
            <img v-if="item._type == 'portfolio_asset' " :src="useImageBuilder(item.asset?.image?.asset, 707)" class="rounded-xl"
                :class="`w-[${colWidth}]`" />
            <RouterLink v-else :to="`/${item.slug?.current}`">
                <img :src="useImageBuilder(item.thumbnail?.asset, 707)" class="rounded-xl hover:scale-110" :class="`w-[${colWidth}]`" />
            </RouterLink>
        </template>
    </masonry-wall>
</template>



