import React from 'react'

import { Card, Grid, CardHeader, CardFooter, Text, CardBody, Image, ResponsiveContext } from 'grommet'

type ProductListProps = {
  products: ProductData[]
  onClickProduct: (product: ProductData) => void
}

export function ProductList({ products, onClickProduct }: ProductListProps) {
  const size = React.useContext(ResponsiveContext)

  const handleClickProduct = (product: ProductData) => {
    onClickProduct(product)
  }

  return (
    <Grid columns={size !== 'small' ? 'small' : '100%'} gap="small">
      {products.map((product, i) => {
        return (
          <Card onClick={() => handleClickProduct(product)} pad="small" key={`product-${product.id}-${i}`}>
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
  )
}
