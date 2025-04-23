<script setup lang="ts">
import Star from "@/components/icons/StarIcon.vue"
import { useClipboard } from '@vueuse/core'
import { ref } from "vue"

const source = ref()
const { copy, copied } = useClipboard()
</script>


<template>
    <div class="flex flex-col sm:flex-row md:gap-[96px] md:px-16 w-full flex-grow justify-center items-center">
        <div class="relative p-16 bg-[#B1DCA8] rounded-lg m-16 sm:m-0 mb-4">
            <Star class="absolute top-0 left-0 rotate-[22deg]" />
            <Star class="absolute top-0 right-0" />
            <Star class="absolute bottom-0 left-0 rotate-[15deg]" />
            <Star class="absolute bottom-0 right-0 rotate-[55deg]" />
            <img src="https://a.storyblok.com/f/297110/4480x6720/493feeb7c5/headshot.JPG/m/378x0" class="rounded-lg" />
            <p ref="source"
                class="text-neutral-700 py-2 my-2 rounded-lg text-center font-bold hover:cursor-pointer hover:bg-[#74a769]"
                @click="copy(source.innerHTML)">
                evekoskie@gmail.com
            </p>
            <p v-if="copied" class="absolute left-1/2 transform -translate-x-1/2">
                Copied
            </p>
        </div>
        <p class="text-white p-16 sm:w-[479px] lg:text-2xl">
            I'm Eve! I'm from California and I am currently based in London, UK. I'm a third year illustration student
            and president of my crochet society at uni. I'm super inspired by emotions, relationships, traveling, and
            drag queens. I love cats, reading, reality tv, and long skirts.
            <br />
            <br />
            My illustration practice is mostly digital but you'll see some doodles, animation, and maybe even some water
            colour here and there. I also love to share my crochet work! I recently completed a course to do nails so l
            will hopefully be sharing some nails soon as well :) thank you for following along, I really love sharing my
            work with you!
        </p>
    </div>
</template>