export default function ProductCard({ product }) {

    return (
        <>

            <div className="card h-100 text-center">
                <figure className="card-img-top text-center">
                    <img src={product?.image} alt={product?.title} className="img-fluid pt-5" style={{ width: '200px' }} />
                </figure>
                <div className="card-body d-flex flex-column justify-content-end fw-bold">
                    <p>{`Categoria: ${product?.category}`}</p>
                    <p>{`Nome Prodotto: ${product?.title.toUpperCase()}`}</p>
                    <p>{`Prezzo: $${product?.price?.toFixed(2)}`}</p>
                    <p className="">{`Valutazione: ⭐ ${product?.rating?.rate}`}</p>
                    <p>{`Acquistati: ${product?.rating?.count}`}</p>
                </div>
            </div>

        </>
    )
}

