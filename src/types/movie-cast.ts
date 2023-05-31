import type { Gender } from "./gender"
import type { Person } from "./person"

export interface MovieCast {
    gender: Gender
    person: Person
    characterName: string
}