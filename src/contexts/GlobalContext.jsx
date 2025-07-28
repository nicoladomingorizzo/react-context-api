import { useEffect, createContext, useContext, useState } from "react";

const GlobalContext = createContext()

function GlobalProvider({ children }) {
    const apiUrl = 'https://fakestoreapi.com/products'
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
                return data;
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, []);
    return (
        <GlobalContext.Provider value={{
            products,
            setProducts
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalContext() {
    return useContext(GlobalContext)
}

export { GlobalProvider, useGlobalContext };