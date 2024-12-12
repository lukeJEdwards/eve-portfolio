import { client } from "@/client";
import imageUrlBuilder from "@sanity/image-url";

import type { Event, internalGroqTypeReferenceTo, Portfolio_asset, Project, Website_asset } from "@/types/sanity.types";


type asset =  {
      _ref: string
      _type: 'reference'
      _weak?: boolean
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset'
  }

type allowed = Website_asset | Project | Portfolio_asset | Event | asset;

export const useImageBuilder = (image: asset | undefined, width?: number) => {
  const builder = imageUrlBuilder(client);
  if(image)
    return width
      ? builder.image(image).width(width).url()
      : builder.image(image).url();
};
