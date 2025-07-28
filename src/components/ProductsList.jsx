import { useState } from "react"
import ProductCard from "./ProductCard";

export default function ProductsList({ products }) {

    const [isLoading, setIsLoading] = useState(false)

    return (
        <>
            {isLoading && (
                <div className="d-flex justify-content-center align-items-center mt-5">
                    <p className="me-3 fs-4">Caricamento dei prodotti</p> {/* Messaggio esistente */}
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            <h2 className="text-center fs-1 pt-5">I NOSTRI PRODOTTI</h2>
            <ProductCard products={products} />
        </>
    )
}