import React from 'react'
import { Box } from '@chakra-ui/react'
import { Header } from './Header'

const CommonUi = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box height={'calc(100vh - 60px)'} overflow="auto" bg={'gray.300'}>
        {children}
      </Box>
    </Box>
  )
}

export default CommonUi