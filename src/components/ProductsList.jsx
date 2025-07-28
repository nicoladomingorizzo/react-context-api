import ProductCard from "./ProductCard";
import { usePostsContext } from "../contexts/PostsContext";
import { Link } from "react-router-dom";

export default function ProductsList() {

    const { products, isLoading, isError } = usePostsContext();

    return (
        <>

            {isError && (
                <div className="d-flex justify-content-center align-items-center mt-5">
                    <p className="me-3 fs-4">Si è verificato un errore durante il caricamento dei prodotti.</p>
                    <div className="alert alert-warning" role="alert">
                        {isError}
                    </div>
                </div>
            )}

            <h2 className="text-center fs-1 pt-5">I NOSTRI PRODOTTI</h2>
            {isLoading && (
                <div className="d-flex justify-content-center align-items-center mt-5">
                    <p className="me-3 fs-4">Caricamento dei prodotti</p> {/* Messaggio esistente */}
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            <div className="row row-cols-1 row-cols-lg-2 g-4 my-5 mx-2">
                {products?.length && products.map(product => {
                    return (
                        <div className="col" key={product.id}>
                            <Link className="link-underline link-underline-opacity-0" to={`/products/${product.id}`}>
                                <ProductCard product={product} />
                            </Link>
                        </div>
                    )
                }
                )}
            </div>

        </>
    )
}