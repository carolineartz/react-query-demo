import 'styled-components/macro'
import { Box, TextInput, TextArea, Text, Button } from 'grommet'
import { useForm, UseFormMethods, SubmitHandler } from 'react-hook-form'

import { useMutationUpdateProduct } from '@/hooks/mutations/product'

type ProductDetailsProps = {
  product: ProductData
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const updateProductMutation = useMutationUpdateProduct()
  const onSubmit = (data: ProductData) => updateProductMutation.mutate(data)

  return (
    <Box key={product.id}>
      <EditProductDetailsForm<ProductData> onSubmit={onSubmit}>
        {({ register }) => (
          <Box gap="small">
            <TextInput type="hidden" name="id" ref={register} defaultValue={product.id} readOnly />
            <Box>
              <Text>Name: </Text>
              <TextInput name="name" ref={register} defaultValue={product.name} />
            </Box>
            <Box>
              <Text>SKU: </Text>
              <TextInput name="sku" readOnly ref={register} defaultValue={product.sku} />
            </Box>
            <Box>
              <Text>Average Rating: </Text>
              <TextInput
                name="average_product_rating"
                ref={register}
                readOnly
                defaultValue={product.average_product_rating}
              />
            </Box>
            <Box>
              <Text>Review Count: </Text>
              <TextInput name="num_reviews" ref={register} readOnly defaultValue={product.num_reviews} />
            </Box>
            <Box>
              <Text>Description: </Text>
              <TextArea css="min-height: 200px" name="description" ref={register} defaultValue={product.description} />
            </Box>
            <Box>
              <Text>List Price: </Text>
              <TextInput name="list_price" ref={register} defaultValue={product.list_price} />
            </Box>
            <Box>
              <Text>Sale Price: </Text>
              <TextInput name="sale_price" ref={register} defaultValue={product.sale_price} />
            </Box>
            <Box>
              <Text>Category: </Text>
              <TextInput name="category" ref={register} readOnly defaultValue={product.category} />
            </Box>
            <Box>
              <Text>Image Url: </Text>
              <TextInput name="image_url" ref={register} defaultValue={product.image_url} />
            </Box>
            <Box>
              <Text>Brand: </Text>
              <TextInput name="brand" ref={register} defaultValue={product.brand} />
            </Box>
            <Box>
              <Button type="submit" label="Save Changes" />
            </Box>
            <Box margin={{ bottom: 'medium' }} />
          </Box>
        )}
      </EditProductDetailsForm>
    </Box>
  )
}

type EditProductDetailsFormProps<TFormValues> = {
  onSubmit: SubmitHandler<TFormValues>
  children: (methods: UseFormMethods<TFormValues>) => React.ReactNode
}

const EditProductDetailsForm = <TFormValues extends Record<string, any> = Record<string, any>>({
  onSubmit,
  children,
}: EditProductDetailsFormProps<TFormValues>) => {
  const methods = useForm<TFormValues>()
  return <form onSubmit={methods.handleSubmit(onSubmit)}>{children(methods)}</form>
}
