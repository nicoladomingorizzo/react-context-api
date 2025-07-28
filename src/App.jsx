import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductsPage';
import AboutUsPage from './pages/AboutUsPage';
import DefaultLayout from './layouts/DefaultLayout';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/Nf404';
import { PostsProvider } from './contexts/PostsContext';

function App() {


  return (
    <>

      <PostsProvider>

        <BrowserRouter>

          <Routes>

            <Route Component={DefaultLayout}>

              <Route index Component={Homepage} />
              <Route path='/products' Component={ProductPage} />
              <Route path='/about' Component={AboutUsPage} />
              <Route path='/products/:id' Component={ProductDetail} />
            </Route>
            <Route path='/*' Component={NotFound} />

          </Routes>

        </BrowserRouter>

      </PostsProvider>
    </>
  )
}

export default App




/*
Creiamo un file per definire il nostro Context ed esportiamolo
Importiamo il Provider in App.jsx e wrappiamoci la nostra applicazione - Facciamo in modo che il componente ProductsList.jsx recuperi i prodotti consumando il Context e crei dunque una card per ciascuno di essi.
La struttura dell’App deve essere
App.jsx > ProductsPage.jsx > ProductsList.jsx > ProductCard.jsx
Bonus
Implementare un componente Alert gestito tramite Context
*/