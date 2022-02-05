import { ICountry } from '../ICountry'

export interface ITvShow {
  score: number
  show: {
    id: number
    url: string
    name: string
    type: string
    language: string
    genres: string[]
    status: string
    runtime: number
    averageRuntime: number
    premiered: string
    ended: string
    officialSite: string
    schedule: { time: string; days: string[] }
    rating: { average: number }
    weight: number
    network: {
      id: number
      name: string
      country: ICountry
      officialSite?: string
    }
    webChannel: { id: number; name: string; country: ICountry }
    dvdCountry: null
    externals: { tvrage: number; thetvdb: number; imdb: string }
    image: { medium: string; original: string }
    summary: string
    updated: number
    _links: { self: { href: string }; previousepisode: { href: string } }
  }
}
