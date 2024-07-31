<template>
  <div>
    <Suspense>
      <div>
        <img :src="resizeImage(row_1.image_1.filename)" />
        <img :src="resizeImage(row_1.image_2.filename)" />
        <RouterLink :to="row_1.text[0].link">
          {{ row_1.text[0].title }}
        </RouterLink>
      </div>
    </Suspense>
  </div>
</template>


<script setup lang="ts">
import { computed, onMounted, ref, type Ref } from "vue";
import { RouterLink } from 'vue-router'

import { useStoryblok } from "@storyblok/vue";

const story = await useStoryblok("landing", {version:'draft'});
const row_1 = computed(() => story.value.content.body[0])
const row_2 = computed(() => story.value.content.body[1])
const resizeImage = (url:string) => `${url}/m/500x0`
</script>

<style lang="scss" scoped>
img{
  border-radius: 10px;
}
</style>