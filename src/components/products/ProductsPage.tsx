import React from 'react'
import 'styled-components/macro'

import { Box, Collapsible } from 'grommet'

import { LoadingIndicator } from '@/components/LoadingIndicator'
import { ProductDetails } from '@/components/products/ProductDetails'
import { ProductList } from '@/components/products/ProductList'
import { useQueryProducts } from '@/hooks/queries/useQueryProducts'

export function ProductsPage() {
  const productsQuery = useQueryProducts()
  const [selectedProduct, setSelectedProduct] = React.useState<ProductData | null>(null)

  const handleClickProduct = (product: ProductData) => {
    if (product.id === selectedProduct?.id) {
      setSelectedProduct(null)
    } else {
      setSelectedProduct(product)
    }
  }

  return (
    <Box fill height="100vh" overflow="hidden">
      <Box flex direction="row">
        <Box flex pad="small" align="center" height="100vh" overflow="scroll">
          {productsQuery.isLoading && <LoadingIndicator />}
          {productsQuery.data && <ProductList products={productsQuery.data} onClickProduct={handleClickProduct} />}
        </Box>
        <Collapsible
          style={{ width: !selectedProduct ? '0' : '30vw', maxWidth: '30vw' }}
          direction="horizontal"
          open={Boolean(selectedProduct)}
        >
          <Box flex width="medium" height="100vh" overflow="scroll">
            <Box pad="medium">{selectedProduct && <ProductDetails product={selectedProduct} />}</Box>
          </Box>
        </Collapsible>
      </Box>
    </Box>
  )
}
