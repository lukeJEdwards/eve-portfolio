<script setup lang="ts">
import { computed } from "vue";

import { useSanityQuery } from "@/composables/useSanityQuery";
import { useImageBuilder } from "@/composables/useImageBuilder";

import type { Website_asset } from "@/types/sanity.types"

const query = `*[
      _type=="website_asset" 
      && (name=="Eve.Dreamz" 
      || name=="landing_GIF")
    ]`

const data = await useSanityQuery<Website_asset[]>(query)
const landing_Title = computed(() => data.filter(i => i.name == "Eve.Dreamz")[0])
const landing_GIF = computed(() => data.filter(i => i.name == "landing_GIF")[0])
</script>


<template>
    <div class="w-full flex-grow flex flex-col items-center justify-center">
        <img :src="useImageBuilder(landing_Title)" class="w-[349px]" />
        <img :src="useImageBuilder(landing_GIF)" class="w-[349px]" />
    </div>
</template>