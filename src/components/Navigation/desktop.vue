<script setup lang="ts">
import Home from "@/assets/navButtons/home.svg"
import Shop from "@/assets/navButtons/shop.svg"
import Portfolio from "@/assets/navButtons/Portfolio.svg"
import Events from "@/assets/navButtons/events.svg"
import Insta from "@/assets/navButtons/Insta.svg"
import About from "@/assets/navButtons/About.svg"

import { Icon } from '@iconify/vue';

import { useElementHover } from '@vueuse/core'
import { ref } from "vue"

const dropDown = ref()
const isHovered = useElementHover(dropDown)

</script>


<template>
    <nav class="flex py-8 xl:px-32 lg:px-12 md:px-8 font-black text-2xl text-white font-serif">
        <ul class="flex mr-auto lg:gap-12 md:gap-8">
            <li>
                <RouterLink to="/">
                    <Home />
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/shop">
                    <Shop />
                </RouterLink>
            </li>
            <li ref="dropDown" class="relative">
                <RouterLink to="/portfolio" class="flex item-center pb-4">
                    <Portfolio />
                    <Icon icon="material-symbols:arrow-drop-down-rounded" :style="{ width: '56px', height: '56px' }" />
                </RouterLink>
                <div v-if="isHovered" class="z-40 absolute bg-[#3E6129] shadow-md px-4 py-2 rounded text-lg w-[225px]">
                    <ul class="flex flex-col items-center">
                        <li class="hover:bg-[#375625] rounded text-center w-full py-2">
                            <RouterLink to="/portfolio/editoral" class="w-full py-2">
                                Editoral
                            </RouterLink>
                        </li>
                        <li class="hover:bg-[#375625] rounded text-center w-full py-2">
                            <RouterLink to="/portfolio/animation" class="w-full py-2">
                                Animation
                            </RouterLink>
                        </li>
                        <li class="hover:bg-[#375625] rounded text-center w-full py-2">
                            <RouterLink to="/portfolio/publishing" class="w-full py-2">
                                Publishing
                            </RouterLink>
                        </li>
                        <li class="hover:bg-[#375625] rounded text-center w-full py-2">
                            <RouterLink to="/portfolio/branding" class="w-full py-2">
                                Branding
                            </RouterLink>
                        </li>
                        <li class="hover:bg-[#375625] rounded text-center w-full py-2">
                            <RouterLink to="/portfolio/personal" class="w-full py-2">
                                Personal
                            </RouterLink>
                        </li>
                        <li class="hover:bg-[#375625] rounded text-center w-full py-2">
                            <RouterLink to="/portfolio/doodles" class="w-full py-2">
                                Doodles
                            </RouterLink>
                        </li>
                        <li class="hover:bg-[#375625] rounded text-center w-full py-2">
                            <RouterLink to="/portfolio/crochet" class="w-full py-2">
                                Crochet
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </li>
            <li>
                <RouterLink to="/events">
                    <Events />
                </RouterLink>
            </li>
        </ul>
        <ul class="flex xl:gap-16 md:gap-8">
            <li>
                <a href="https://www.instagram.com/eve.dreamz/" target="_blank">
                    <Insta />
                </a>
            </li>
            <li>
                <RouterLink to="/about">
                    <About />
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>