import { Planet } from "../api"
import { Masonry } from '@mui/lab'
import { Box, Container, Pagination } from "@mui/material"
import { PlanetCard } from "../components/PlanetCard"

interface ListProps {
    planets: Planet[]
    count: number
    onPageChange: (page: number) => void
    page: number
}

export const List: React.FC<ListProps> = ({planets, count, page, onPageChange}) => {

    const onChange = (_: React.ChangeEvent<unknown>, page: number) => {
        onPageChange(page)
    }

    

    return <Container>
                
        
        <Box sx={{pt: 2}}>
            <Masonry columns={3} spacing={3}>
                {planets.map((planet, i) => {
                    return <PlanetCard planet={planet}/>
                })}
            </Masonry>
            <Pagination count={count} onChange={onChange} page={page}/>
        </Box>
        </Container>
}