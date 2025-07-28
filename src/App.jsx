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