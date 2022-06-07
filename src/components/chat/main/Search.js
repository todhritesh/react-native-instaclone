import React from 'react'
import { Box, Input } from 'native-base'

const Search = () => {
  return (
    <Box>
        <Input borderRadius={10} focusOutlineColor="black" height={9} px={3} color="white" placeholder="Search..." width="100%" />
    </Box>
  )
}

export default Search

