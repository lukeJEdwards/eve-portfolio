import { defineStore } from "pinia";
import { useAsyncState } from "@vueuse/core";

import { client } from "@/client";


import type { Portfolio_asset, Project } from "@/types/sanity.types";



export const useAssetsStore = defineStore("Assets", () => {

    const query = `*[
            _type=="portfolio_asset"
            || _type == "project"
        ]`;

    const { state, isReady, isLoading } = useAsyncState(
      client.fetch<(Portfolio_asset | Project)[]>(query).then(r => r.sort((a, b) => {
        if(a.meta_data?.created && b.meta_data?.created){
          const date_a = new Date(a.meta_data?.created)
          const date_b = new Date(b.meta_data?.created)
          return date_a.valueOf() - date_b.valueOf()
        }else{
          return 0
        }
      }).reverse()),
      []
    );

    return { state, isLoading, isReady };
});