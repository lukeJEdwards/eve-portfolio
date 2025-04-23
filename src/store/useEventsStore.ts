import { defineStore } from "pinia";
import { useAsyncState } from "@vueuse/core";
import { useSanityQuery } from "@/composables/useSanityQuery";

import type { Event } from "@/types/sanity.types";


export const useEventsStore = defineStore("events", () => {
    const query = `*[
        _type=="event"
        ]`;

    const { state, isReady, isLoading } = useAsyncState(
        useSanityQuery<Event[]>(query), []
    )

    function get_event(event_slug:string|string[]): Event{
        return state.value.filter(e => e.slug?.current == event_slug)[0]
    }

    return { state, isReady, isLoading, get_event };
})