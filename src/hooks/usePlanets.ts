import { useCallback, useState } from 'react'
import { getPlanets, PlanetResponse } from '../api'



export const usePlanets = () => {
    const [page, setPage] = useState<number>(1)
    const [ planets, setPlanets ] = useState<PlanetResponse>()
    const [ isLoading, setIsLoading ] = useState(false)
    const [ hasErrored, setHasErrored ] = useState(false)
    const [search, setSearch] = useState("")

    const fetchPlanets = useCallback(async (page: number, search: string) => {

        setIsLoading(true)
        setHasErrored(false)
    
        try{
        
            const data = await getPlanets(page, search)
            setPlanets(data)
        } catch (error) {
            setHasErrored(true)
        }

        setIsLoading(false)
    }, [])

    const handleSearch = (search) => {
        setPage(1);
        fetchPlanets(1, search);
    }

    const handleSetPage = (page: number) =>{
        setPage(page);
        fetchPlanets(page, search)
    }

    return {
        isLoading,
        hasErrored,
        planets,
        fetchPlanets,
        page,
        setPage,
        search,
        handleSearch,
        setSearch,
        handleSetPage
    }
}