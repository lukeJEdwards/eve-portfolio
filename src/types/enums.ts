

type Enum = {[name:string]:any}

export function toArray(e: Enum): string[] {
  return Object.values(e).filter(v => typeof v === 'string' )
}


export enum asset_type {
  image = 'image',
  video = 'video',
}

export enum asset_category {
  animation = 'animation',
  branding = 'branding',
  crochet = 'crochet',
  doodles = 'doodles',
  editoral = 'editoral',
  personal = 'personal',
  publishing = 'publishing',
}
