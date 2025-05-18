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
        <p class="text-white p-16 sm:w-[479px] lg:text-xl">
            Eve Koskie is a Californian born, London based illustrator with a passion for storytelling through her
            unique visual language. She finds inspiration in drag queens, nature, and most of all, her own life
            experiences. Human connection is the driving force behind Eve’s practice, as each illustration brings her a
            better understanding of the emotions we all encounter in our lives.
            <br />
            <br />
            The work Eve creates is often in the form of comics, editorial illustration, animation, and physical
            products. This diverse skillset has her led to sell her work at art markets, teach workshops, and plan
            community events. As an illustrator, she brings a fresh perspective to the industry and an excitement for
            collaboration.
        </p>
    </div>
</template>
