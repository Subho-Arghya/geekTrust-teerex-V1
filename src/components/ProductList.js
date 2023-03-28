import React from 'react'
import { Grid, Text } from '@chakra-ui/react'
import { AppState } from '../context/AppContext'
import SingleProduct from './SingleProduct'


const ProductList = () => {

    const { products, searchString, searchResult} = AppState()

  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
        lg: 'repeat(5, 1fr)',
      }}
      gap={5}
      margin={{ base: '40px 30px', sm: '40px 15px', md: '40px 0' }}
    >
      {searchString.length > 0 || searchResult ? (
        searchResult.length === 0 ? (
          <Text fontSize={20}>No Product Found</Text>
        ) : (
          searchResult.map(data => <SingleProduct key={data.id} data={data} />)
        )
      ) : (
        products.map(data => <SingleProduct key={data.id} data={data} />)
      )}
    </Grid>
  )
}

export default ProductList