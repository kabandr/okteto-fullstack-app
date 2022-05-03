import { listenerCount } from "process"
import { useEffect, useState } from "react"

function Products() {
    const API_URL = "http://localhost:5000/products"

    const [products, setProducts] = useState([])

    useEffect(() => {

        const fetchProducts = async () => {

            try {
                const response = await fetch(API_URL)
                const productsList = await response.json()
                setProducts(productsList)

            } catch (err: any) {
                console.error(err.message)
            }
        }
        (async () => await fetchProducts())()
    }, [])

    return (
        <>
            <h1>List of Products</h1>
            <p>{JSON.stringify(products)}</p>

        </>
    )

}

export default Products