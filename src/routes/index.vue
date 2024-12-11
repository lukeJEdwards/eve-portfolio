<script setup lang="ts">
import { client } from "@/client"
import type { Website_asset } from "@/types/sanity.types"

import { computed } from "vue";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

const query = `*[
      _type=="website_asset" 
      && (name=="Eve.Dreamz" 
      || name=="landing_GIF")
    ]`

const data = await client.fetch<Website_asset[]>(query)
const landing_Title = computed(() => data.filter(i => i.name == "Eve.Dreamz")[0])
const landing_GIF = computed(() => data.filter(i => i.name == "landing_GIF")[0])
</script>


<template>
    <div class="w-full flex-grow flex flex-col items-center justify-center">
        <img :src="builder.image(landing_Title.asset?.image).url()" class="w-[349px]" />
        <img :src="builder.image(landing_GIF.asset?.image).url()" class="w-[349px]" />
    </div>
</template>