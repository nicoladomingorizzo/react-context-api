
import ProductsList from "../components/ProductsList";

import { usePostsContext } from "../contexts/PostsContext";


export default function ProductPage() {

    //Destrutturo l'oggetto
    const { products } = usePostsContext();

    return (
        <>
            <main className="pb-2">
                <ProductsList products={products} />
            </main>
        </>

    )
}

