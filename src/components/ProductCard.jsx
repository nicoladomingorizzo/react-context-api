import { Link } from "react-router-dom";
import { usePostsContext } from "../contexts/PostsContext";

export default function ProductCard() {

    const { products } = usePostsContext();

    return (
        <div className="row row-cols-1 row-cols-lg-2 g-4 my-5 mx-2">
            {products?.length && products.map(product => {
                return (
                    <div className="col" key={product.id}>
                        <Link className="link-underline link-underline-opacity-0" to={`/products/${product.id}`}>
                            <div className="card h-100 text-center">
                                <figure className="card-img-top text-center">
                                    <img src={product.image} alt={product.title} className="img-fluid pt-5" style={{ width: '200px' }} />
                                </figure>
                                <div className="card-body d-flex flex-column justify-content-end fw-bold">
                                    <p>{`Categoria: ${product.category}`}</p>
                                    <p>{`Nome Prodotto: ${product.title.toUpperCase()}`}</p>
                                    <p>{`Prezzo: $${product.price.toFixed(2)}`}</p>
                                    <p className="">{`Valutazione: ⭐ ${product.rating.rate}`}</p>
                                    <p>{`Acquistati: ${product.rating.count}`}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            }
            )}
        </div>
    )
}