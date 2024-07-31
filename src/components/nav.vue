<template>
    <nav>
        <ul>
            <li>
                <RouterLink to="/">
                    Home
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/portfolio">
                    portfolio
                </RouterLink>
            </li>
            <li>
                <RouterLink to="/contact">
                    contact
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import {RouterLink} from 'vue-router'
</script>

<style lang="scss" scoped>
nav{
    position: absolute;
    top: 3rem;
    left: 3rem;
    display: flex;
    background-color: #1c1c1c;
    border-radius: 6px;
    ul{
        display: flex;
        list-style: none;
        padding: 4px;
        li{
            display: flex;
            &:not(:last-child){
                margin-right: 1rem;
            }
        }
        li a{
            color: white;
            border-radius: 6px;
            padding: 0.25rem 1.5rem;
            text-transform: uppercase;
        }
        li a:hover{
            background-color: white;
            color: #1c1c1c;
        }
    }
}

.router-link-active{
    background-color: white;
    color: #1c1c1c;
}
</style>