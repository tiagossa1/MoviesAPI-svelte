import type { Genre } from "./genre"
import type { MovieCast } from "./movie-cast"

export interface Movie {
    id: number
    title: string
    budget: number
    homepageUrl: any
    plot: string
    releaseDate: string
    runtimeInMinutes: number
    movieCasts: MovieCast[]
    genres: Genre[]
}