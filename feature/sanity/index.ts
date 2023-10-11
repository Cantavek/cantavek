import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
// import type {QueryParams} from '@sanity/client'


const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID 
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-06-20'
export const SanityToken = process.env.SECRET_SANITY_VIEW_TOKEN


// npm i @portabletext/react @sanity/image-url

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: SanityToken,
  useCdn: false,
  // perspective: 'published',
})

export const imageBuilder = imageUrlBuilder(client);

export function urlForImage(source: SanityImageSource) {
  return imageBuilder.image(source);
}

export type User = {
  _id: string,
  name: string,
  email: string
  active_bundle?: Bundle,
  active_bundle_expire_at?: string
}

export type Home = {
  seo: {
    title: string,
    description: string,
    image: string,
  }[],
  team: {
    name: string,
    role: string,
    avatar: string,
    instagram_link: string,
    twitter_link: string,
    linkedin_link: string
  }[],
  sponsors:{
    name: string,
    logo: string,
    link: string
  }[]
}

export type Bundle = {
  _id: string,
  name: string,
  duration: number,
  price_gdes: number,
  price_usd: number,
  accesses: string[],
}

export type Video = {
  _id: string,
  title: string,
  duration: string,
  lock: boolean
  poster: string
  teaser?: string
  video?: string
}

export type Page = {
  _id: string,
  title: string,
  image?: string
  intro: string,
  body: any
  seo: {
    title: string,
    description: string,
  }
}

export type BookingType = {
  _id: string;
  name: string;
  duration: string
  duration_count: string;
  price_gdes: number;
  price_usd: number;
}

export type Sponsoring = {
  _id: string;
  name: string;
  description: string;
  price_gdes: number
  price_usd: number;
}

export const getAllBundle = async () => {
  return client.fetch<Bundle[]>(`*[_type == "bundle"] | order(_createdAt asc){
    _id,
    duration,
    name,
    price_gdes,
    price_usd,
    accesses
  }`)
} 

export const getBundle = async (id: string) => {
  return client.fetch<Bundle>(`*[_type == "bundle" && _id == $id][0]{
    _id,
    duration,
    name,
    price_gdes,
    price_usd,
  }`, {id})
} 

export const getUserByEmail = async (email: string) => {
  return client.fetch<User>(`*[_type == "user" && email == $email][0]{
    _id,
    email,
    name,
    "active_bundle": active_bundle->{
      _id,
      name,
      duration,
    },
    active_bundle_expire_at
  }`, {email})
}

export const getVideos = () => {
  return client.fetch<Video[]>(`*[_type == "video"]{
    _id,
    title,
    lock,
    'poster': poster.asset->url,
    duration,
  }`)
}

export const getVideo = (id: string, unlock: boolean) => {
  if(unlock) {
    return client.fetch<Video>(`*[_type == "video" && _id == $id][0]{
      _id,
      title,
      lock,
      'poster': poster.asset->url,
      'video': video.asset->url,
      duration,
    }`, { id })
  }
  return client.fetch<Video>(`*[_type == "video" && _id == $id][0]{
    _id,
    title,
    lock,
    'poster': poster.asset->url,
    'teaser': teaser.asset->url,
    duration,
  }`, { id })
}

export const getOtherVideos = (id: string) => {
  return client.fetch<Video[]>(`*[_type == "video" && _id != $id][0...5]{
    _id,
    title,
    lock,
    'poster': poster.asset->url,
    'teaser': teaser.asset->url,
    duration,
  }`, { id })
}

export const getPage = (title: string) => {
  return client.fetch<Page>(`*[_type == 'page' && title == $title][0]{
    title,
    "image": image.asset->url,
    intro,
    body,
    seo{
      title,
      description,
    }
  }`, { title })
}

export const getHomePageData = () => {
  return client.fetch<Home>(`*[_type == 'home'][0]{
    "seo": seo{
      title,
      description,
      'image': image.asset->url,
    },
    "team": teams[]{
      name,
      role,
      "avatar": avatar.asset->url,
      instagram_link,
      twitter_link,
      linkedin_link,
    },
    "sponsors": list[]{
      name,
      "logo": logo.asset->url,
      link
    }
  }`)
}

export const getBookingType = () => {
  return client.fetch<BookingType[]>(`*[_type == "booking-type"]{
    _id,
    name,
    duration,
    duration_count,
    price_gdes,
    price_usd,
  }`)
}

export const getSponsorTypes = () => {
  return client.fetch<Sponsoring[]>(`*[_type == "sponsoring"]{
    _id,
    name,
    description,
    price_gdes,
    price_usd
  }`)
}

export const getSponsorType = (id: string) => {
  return client.fetch<Sponsoring>(`*[_type == "sponsoring" && _id == $id][0]{
    _id,
    name,
    description,
    price_gdes,
    price_usd
  }`, { id })
}

export const getSponsor = (id: string) => {
  return client.fetch<{ _id: string, name: string}>(`*[_type == "sponsor" && _id == $id][0]{
    _id,
    name,
  }`, { id })
}