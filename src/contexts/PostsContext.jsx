import { useEffect, createContext, useContext, useState } from "react";

const PostsContext = createContext()

function PostsProvider({ children }) {
    const apiUrl = 'https://fakestoreapi.com/products'
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
                return data;
            })
            .catch(err => {
                setIsError('Si è verificato un errore durante il recupero dei dati. Riprova in un secondo momento.')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, []);

    return (

        <PostsContext.Provider value={{
            products,
            isLoading,
            isError,
            setProducts
        }}>
            {children}
        </PostsContext.Provider>

    )

}

function usePostsContext() {
    return useContext(PostsContext)
}

export { PostsProvider, usePostsContext };