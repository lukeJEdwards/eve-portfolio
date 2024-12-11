<script setup lang="ts">
import { client } from "@/client"
import type { Website_asset } from "@/types/sanity.types"

import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

const query = `*[
  _type=="website_asset" 
  && name=="Coming Soon"
][0]`

const data = await client.fetch<Website_asset>(query)
</script>

<template>
    <div class="flex flex-grow justify-center items-center">
        <img :src="builder.image(data.asset?.image).url()" class="w-6/12 md:w-3/12" />
    </div>
</template>
