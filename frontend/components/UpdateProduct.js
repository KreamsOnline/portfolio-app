import gql from "graphql-tag";
import useQuery from '@apollo/client';

const SINGLE_PRODUCT_QUERY = gql`
    query SINGLE_PRODUCT_QUERY($id: ID!) {
    Product(where: {
        id: $id
    }) {
        name
        price
        description
        photo {
                altText
                image {
                    publicUrlTransformed
                }
        } 
    }
}
`
const UPDATE_PRODUCT_MUTATION = gql`
    mutation UPDATE_PRODUCT_MUTATION(
        $id: ID!
        $name: String
        $description: String
        $price: Int
    ) {
        UpdateProduct(
            id: $id,
            data: {
                id: $id,
                name: $name,
                description: $description,
                price: $price
                
            }
        ) {
            id
            name
            description
            price
        }
    }
`

export default function UpdateProduct({ id }) {
    // 1. We need to get the existing product
    const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY, { variable: { id },
    });
    // 2. We need to get the mutation to update the product
    const [ updateProduct, 
        { data: updateData, error: updateError, loading: updateLoading }] = useMutation(UPDATE_PRODUCT_MUTATION, {
            variables: {
                id,
        // TODO: pass in updates to product here
    }})
    // 2.5  create some state for the form inputs:
    const { inputs, handleChange, clearForm, resetForm } = useForm(data);
    // 3 We need the form to handle the updates

    return (
        <Form 
            onSubmit={async (e) => {
                e.preventDefault();
                // Submit the inputfields to the backend:
                // const res =  await createProduct();
                // TODO!!! {Handlesubmit}
                // clearForm();
                // // Go to that products page!
                // Router.push({
                //     pathname: `/product/${res.data.createProduct.id}`,
                // })
            }}
        >
            <DisplayError error={error || updateError} />
            <fieldset disabled={updateLoading} aria-busy={updateLoading}>
                <label htmlFor="name">
                    Name
                    <input 
                        type="text" 
                        id="name"
                        name='name'
                        placeholder="Name"
                        value={inputs.name}
                        onChange={handleChange} 
                    />
                </label>
                <label htmlFor="price">
                    Price
                    <input 
                        type="number" 
                        id="price"
                        name='price'
                        placeholder="price"
                        value={inputs.price}
                        onChange={handleChange} 
                    />
                </label>
                <label htmlFor="description">
                    Description
                    <input 
                        id="description"
                        name='description'
                        placeholder="Description"
                        value={inputs.description}
                        onChange={handleChange} 
                    />
                </label>

                
                <button type="submit" >Update Product</button>
            </fieldset>
        </Form>
        
    );
}