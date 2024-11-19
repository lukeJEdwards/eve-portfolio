<script setup lang="ts">
import Home from "@/assets/navButtons/home.svg"
import Shop from "@/assets/navButtons/shop.svg"
import Portfolio from "@/assets/navButtons/Portfolio.svg"
import Insta from "@/assets/navButtons/Insta.svg"
import About from "@/assets/navButtons/About.svg"

import { Icon } from '@iconify/vue';
import { ref } from "vue";
const isOpen = ref(false);
</script>


<template>
    <nav class="flex" :class="{'absolute flex-col bg-[#B1DCA8] w-full h-full p-4 pb-16 z-10': isOpen}">
        <Icon v-if="isOpen" icon="maki:cross-11" @click="isOpen = !isOpen" :style="{ width: '24px', height: '24px' }"
            class="hover:cursor-pointer right-4 top-4 self-end text-white" />

        <Icon v-else icon="charm:menu-hamburger" @click="isOpen = !isOpen" :style="{ width: '24px', height: '24px' }"
            class="hover:cursor-pointer ml-auto mr-4 mt-4" />
        <ul v-if="isOpen" class="flex flex-col justify-around h-full">
            <RouterLink to="/" @click="isOpen = !isOpen">
                <Home class="mx-auto" />
            </RouterLink>
            <RouterLink to="/shop" @click="isOpen = !isOpen">
                <Shop class="mx-auto" />
            </RouterLink>
            <RouterLink to="/portfolio" @click="isOpen = !isOpen">
                <Portfolio class="mx-auto" />
            </RouterLink>
            <a href="https://www.instagram.com/eve.dreamz/" target="_blank" @click="isOpen = !isOpen">
                <Insta class="mx-auto" />
            </a>
            <RouterLink to="/about" @click="isOpen = !isOpen">
                <About class="mx-auto" />
            </RouterLink>
        </ul>
    </nav>
</template>