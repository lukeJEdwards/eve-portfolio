import { defineStore } from "pinia";
import { useStoryblok } from "@storyblok/vue";
import { reactive, ref, type Reactive } from "vue";

export const useAssetsStore = defineStore("Assets", () => {

    const categories: Reactive<{[index:string]: Array<{}>}> = reactive({})
    const isLoading = ref(true)


    async function getCategories(){
        const story = await useStoryblok("all-categories", { version: "draft"});
        return story.value.content.Reference
    }

    async function getCategoryContent(uuid: string){
        const story = await useStoryblok(uuid, {
          version: "draft",
          find_by:"uuid"
        });
        return story.value
    }

    async function initialize(){
        const allCategories = await getCategories()
        allCategories.forEach(async (uuid: string) => {
            const category = await getCategoryContent(uuid)
            categories[category.name] = category.content.Assets;
        });
        isLoading.value = false;
    }

    return { initialize, categories,  isLoading };
});