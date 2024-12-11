<script setup lang="ts">

import { useSanityQuery } from "@/composables/useSanityQuery";
import { useImageBuilder } from "@/composables/useImageBuilder";

import type { Website_asset } from "@/types/sanity.types"

const query = `*[
  _type=="website_asset" 
  && name=="Coming Soon"
][0]`

const image = await useSanityQuery<Website_asset>(query)
</script>

<template>
    <div class="flex flex-grow justify-center items-center">
        <img :src="useImageBuilder(image)" class="w-6/12 md:w-3/12" />
    </div>
</template>
