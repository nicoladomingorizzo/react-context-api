import { useEffect, createContext, useContext, useState } from "react";

const PostsContext = createContext()

function PostsProvider({ children }) {
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
            .catch(err => {
                alert(`Si è verificato un errore: ${err} `)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, []);
    return (
        <PostsContext.Provider value={{
            products,
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