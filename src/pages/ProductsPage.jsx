
import ProductsList from "../components/ProductsList";

import { useGlobalContext } from "../contexts/GlobalContext";


export default function ProductPage() {

    //Destrutturo l'oggetto
    const { products } = useGlobalContext();

    return (
        <>
            <main className="pb-2">
                <ProductsList products={products} />
            </main>
        </>

    )
}

