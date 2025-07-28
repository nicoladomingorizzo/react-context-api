import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function ProductDetail() {

    const { id } = useParams();
    const apiUrl = `https://fakestoreapi.com/products/${id}`;
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
            // .catch(err => {
            //     navigate('/*');
            // })
            .finally(() => {
                setIsLoading(false); // 
            });
    }, [id, navigate])

    return (
        <>

            {isLoading && (
                <div className="d-flex justify-content-center align-items-center mt-5">
                    <p className="me-3 fs-4">Caricamento</p> {/* Messaggio esistente */}
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            <div className="container text-center">
                <div className="card w-75 border-0 mx-auto">
                    <div className="d-flex justify-content-end me-5 mb-3">
                        <button className="btn btn-outline-dark text-right" onClick={e => { navigate('/products') }}>X</button>
                    </div>
                    <div className="d-flex justify-content-around gap-3">
                        <button className='btn btn-outline-dark text-right' disabled={product.id === 1} onClick={e => { navigate(`/products/${parseInt(product.id - 1)}`) }}>Predecente</button>
                        <button className={`btn btn-outline-dark text-right`} disabled={product.id === 20} onClick={e => { navigate(`/products/${parseInt(product.id + 1)}`) }}>Successivo</button>
                    </div>
                    <p className="mt-3 fw-bold">{`Nome Prodotto: ${product?.title?.toUpperCase()}`}</p>
                    <div>
                        <img src={product.image} alt={product.title} className="w-25 py-3" />
                    </div>
                    <div className="d-flex flex-column justify-content-end fw-bold my-">
                        <p className="my-3">{`Categoria: ${product.category}`}</p>
                        <p className="my-3">{product?.description}</p>
                        <p className="my-3">{`Prezzo: $${product?.price?.toFixed(2)}`}</p>
                        <p className="my-3">{`Valutazione: ⭐ ${product?.rating?.rate}`}</p>
                        <p className="my-3">{`Acquistati: ${product?.rating?.count}`}</p>
                    </div>
                </div>
            </div>

        </>
    )
}