import { client } from "@/client";
import imageUrlBuilder from "@sanity/image-url";

import type { Portfolio_asset, Project, Website_asset } from "@/types/sanity.types";

export const useImageBuilder = (image: Website_asset | Project | Portfolio_asset, width?: number) => {
  const builder = imageUrlBuilder(client);
  if(image._type == "project"){
    if(image.thumbnail?.asset)
      return width ? builder.image(image.thumbnail).width(width).url() : builder.image(image.thumbnail).url();
  }else{
    if (image.asset?.image?.asset)
      return width
        ? builder.image(image.asset.image).width(width).url()
        : builder.image(image.asset.image).url();
  }
};
