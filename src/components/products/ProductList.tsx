import React from 'react'

import { Box, ResponsiveContext, Card, Grid, CardHeader, CardFooter, Text, CardBody, Image } from 'grommet'

import { LoadingIndicator } from '@/components/LoadingIndicator'
import { useQueryProducts } from '@/hooks/queries/useQueryProducts'

export function ProductList() {
  const productsQuery = useQueryProducts()
  const size = React.useContext(ResponsiveContext)

  return (
    <Box pad="large">
      {productsQuery.isLoading && <LoadingIndicator alignSelf="center" />}
      <Grid columns={size !== 'small' ? 'small' : '100%'} gap="small">
        {productsQuery.data?.map((product, i) => {
          return (
            <Card pad="small" key={`product-${product.id}-${i}`}>
              <CardHeader background="#ffffff71">{product.name}</CardHeader>
              <CardBody>
                <Image src={product.image_url} />
              </CardBody>
              <CardFooter background="#ffffff71" justify="end">
                <Text>£{product.list_price.toLocaleString()}</Text>
              </CardFooter>
            </Card>
          )
        })}
      </Grid>
    </Box>
  )
}
