import { client } from "@/client";
import imageUrlBuilder from "@sanity/image-url";

import type { Event, Portfolio_asset, Project, Website_asset } from "@/types/sanity.types";

export const useImageBuilder = (image: Website_asset | Project | Portfolio_asset | Event, width?: number) => {
  const builder = imageUrlBuilder(client);
  if(image._type == "project" || image._type == "event"){
    if(image.thumbnail?.asset)
      return width ? builder.image(image.thumbnail).width(width).url() : builder.image(image.thumbnail).url();
  }else{
    if (image.asset?.image?.asset)
      return width
        ? builder.image(image.asset.image).width(width).url()
        : builder.image(image.asset.image).url();
  }
};
