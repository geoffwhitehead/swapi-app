import React, { useEffect, useState } from 'react';
import { List } from './pages/List';
import { usePlanets } from './hooks/usePlanets'
import { Search } from '@mui/icons-material';
import { Box, Button, Input } from '@mui/material';
export const App: React.FC = () => {
  const { planets, isLoading, hasErrored, fetchPlanets, handleSearch, handleSetPage, page, setSearch, setPage, search} = usePlanets()

  useEffect(() => {
    fetchPlanets(1, "")
  }, [fetchPlanets])

  const handleOnChange = (event) => {
    console.log('event', event)
    console.log('event.target.value', event.target.value)
    setSearch(event.target.value)
  }
  const handlePageChange = async (page: number) => {
    handleSetPage(page)
  }

  if(!planets) {
    return <p>No data ...</p>
  }

  if(isLoading) {
    return <p>Fetching data ... </p>
  }

  if(hasErrored) {
    return <p>Something has gone wrong ... </p>
  }
return (
  <div>
    <Box margin={2} padding={5} sx={{backgroundColor: 'white'}}>
        <Input fullWidth value={search} onChange={handleOnChange}/>
        <Button onClick={() => handleSearch(search)}>Search</Button>
    </Box>
    <List page={page} planets={planets.results} count={Math.ceil(planets.count / 10)} onPageChange={handlePageChange}/>
  </div>
)
}
