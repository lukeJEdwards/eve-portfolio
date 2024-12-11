<script setup lang="ts">
import { useAssetsStore } from '@/store/useAssetsStore';

import { useWindowSize } from '@vueuse/core';
import { useRoute, useRouter } from "vue-router";
import { computed, ref, watch } from 'vue';

import { storeToRefs } from 'pinia';

import imageUrlBuilder from '@sanity/image-url'
import { client } from "@/client"

import type { Portfolio_asset, Project } from '@/types/sanity.types';
const builder = imageUrlBuilder(client)

const { state } = storeToRefs(useAssetsStore())

const route = useRoute()

const images = computed(() => route.params.category == 'all' ? state.value : state.value.filter(i => i.category == route.params.category))

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

function getUrl(item: Portfolio_asset | Project){
    try{
        if (item._type == 'portfolio_asset'){
            return builder.image(item.asset?.image?.asset?._ref).width(707).url()
        }else{
            return builder.image(item.thumbnail?.asset?._ref).width(707).url()
        }
    }
    catch(e){
        console.log(item)
    }
}

</script>

<template>
    <masonry-wall :items="images" :gap="16" :column-width="colWidth" class="pt-32 xl:px-32 lg:px-12 px-8">
        <template #default="{ item }">
            <img v-if="item._type == 'portfolio_asset' " :src="getUrl(item)" class="rounded-xl"
                :class="`w-[${colWidth}]`" />
            <RouterLink v-else :to="`/${item.slug?.current}`">
                <img :src="getUrl(item)" class="rounded-xl hover:scale-110" :class="`w-[${colWidth}]`" />
            </RouterLink>
        </template>
    </masonry-wall>
</template>



