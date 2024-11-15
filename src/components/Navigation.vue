<script setup lang="ts">
import Home from "@/assets/navButtons/home.svg"
import Shop from "@/assets/navButtons/shop.svg"
import Portfolio from "@/assets/navButtons/Portfolio.svg"
import Insta from "@/assets/navButtons/Insta.svg"
import About from "@/assets/navButtons/About.svg"
</script>


<template>
    <nav class="flex py-8 px-32 font-black text-2xl text-white font-serif">
        <ul class="flex mr-auto gap-32">
            <li>
                <RouterLink to="/">
                    <Home class="fill-white" />
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/shop">
                    <Shop class="fill-white" />
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/portfolio">
                    <Portfolio />
                </RouterLink>
            </li>
        </ul>
        <ul class="flex gap-16">
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