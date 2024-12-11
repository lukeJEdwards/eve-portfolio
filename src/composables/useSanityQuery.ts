import {client} from "@/client"

export const useSanityQuery = async <T>(query: string) => {
    return await client.fetch<T>(query);
}