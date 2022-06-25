const BASE_URL = 'https://swapi.dev/api/'

export interface Planet {
    climate: string
    created: string
    diameter: string
    edited: string
    films: string[]
    gravity: string
    name: string
    orbital_period: string
    population: string
    residents: string[]
    rotation_period: string
    surface_water:string 
    terrain:string 
    url:string 
}

export interface PlanetResponse {
    count: number
    next: string | null
    previous: string | null
    results: Planet[] 
}

export const getPlanets = async (page: number, search: string): Promise<PlanetResponse> => {
    const url = `${BASE_URL}planets?page=${page.toString()}&&search=${search}`
    const response = await fetch(url)

    if(!response.ok) {
        throw new Error("Failed to fetch data")
    }

    const data = await response.json() as PlanetResponse
    return data
}